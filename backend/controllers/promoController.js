const Promos = require("../models/Promo");
const CustomErrorHandler = require("../services/CustomErrorHandler");

class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filtering() {
    const queryObj = { ...this.queryString }; // req.query = querySting same jinis

    // console.log(queryObj); // before delete page

    const excludedFields = ["page", "sort", "limit"];
    excludedFields.forEach((element) => delete queryObj[element]);

    // console.log(queryObj); // after delete page

    let queryStr = JSON.stringify(queryObj);
    //    gte = greater than or equal
    //    lte = lesser than or equal
    //    lt = lesser than
    //    gt = greater than
    queryStr = queryStr.replace(
      /\b(gte|gt|lt|lte|regex)\b/g,
      (match) => "$" + match
    );
    this.query.find(JSON.parse(queryStr));
    // console.log(this);
    return this;
  }
  sorting() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-createdAt");
    }

    return this;
  }
  paginating() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 8;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

const promoController = {
  async getPromos(req, res, next) {
    try {
      const features = new APIfeatures(Promos.find(), req.query)
        .filtering()
        .sorting();

      const promos = await features.query;

      if (promos.length < 0) {
        return res.status(404).json({
          message: "No se encontro ninguna promocion.",
        });
      }

      res.json({
        status: "success",
        result: promos.length,
        promos: promos,
      });
    } catch (err) {
      return next(err);
    }
  },
  async createPromo(req, res, next) {
    console.log(req.body);
    try {
      const { nombre, descripcion, imagen } = req.body;

      if (!imagen) {
        return next(
          CustomErrorHandler.badRequest("Necesitas subir una imagen.")
        );
      }

      const promo = new Promos({
        nombre: nombre.toLowerCase(),
        descripcion,
        imagen,
      });

      const savedPromo = await promo.save();

      res.status(201).json({
        message: `Se ha agregado la promocion correctamente!`,
        promo: savedPromo,
      });
    } catch (error) {
      return next(error);
    }
  },
  async updatePromos(req, res, next) {
    try {
      const { nombre, descripcion, imagen } = req.body;
      if (!imagen) {
        return next(
          CustomErrorHandler.badRequest("Necesitas subir una imagen")
        );
      }

      await Promos.findOneAndUpdate(
        { _id: req.params.id },
        {
          nombre,
          descripcion,
          imagen,
        },
        { new: true }
      );

      res.status(200).json({ message: "Promocion Actualizada" });
    } catch (err) {
      return next(err);
    }
  },
  async deletePromos(req, res, next) {
    try {
      try {
        await Promos.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Promocion Eliminada" });
      } catch (err) {
        return next(err);
      }
    } catch (err) {
      return next(err);
    }
  },
  async getByIdPromo(req, res, next) {
    let promo;
    try {
      promo = await Promos.findOne({ _id: req.params.id }).select(
        "-updatedAt -__v"
      );
    } catch (err) {
      return next(err);
    }

    res.status(200).json(promo);
  },
  async getAllPromos(req, res, next) {
    let promos;
    try {
      promos = await Promos.find().select("-updatedAt -__v").sort({ _id: -1 });
    } catch (err) {
      return next(err);
    }

    res.status(200).json(promos);
  },
};

module.exports = promoController;
