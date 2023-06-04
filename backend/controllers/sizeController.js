const Sizes = require("../models/Size");
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

const sizeController = {
  async getSizes(req, res, next) {
    try {
      const features = new APIfeatures(Sizes.find(), req.query)
        .filtering()
        .sorting();

      const sizes = await features.query;

      if (sizes.length < 0) {
        return res.status(404).json({
          message: "No se encontro ningun tamaño.",
        });
      }

      res.json({
        status: "success",
        result: sizes.length,
        sizes: sizes,
      });
    } catch (err) {
      return next(err);
    }
  },
  async createSize(req, res, next) {
    console.log(req.body);
    try {
      const { nombre, rebanadas, precio } = req.body;

      if (!rebanadas) {
        return res.status(400).json({
          message: "Tienes que proporcionar la cantidad de rebanadas.",
        });
      }
      if (!nombre || !precio) {
        return res.status(400).json({
          message: "Tienes que proporcionar un nombre y un precio.",
        });
      }

      const size = new Sizes({
        nombre: nombre.toLowerCase(),
        rebanadas,
        precio,
      });

      const savedSize = await size.save();

      res.status(201).json({
        message: `El tamaño se ha agregado correctamente`,
        size: savedSize,
      });
    } catch (error) {
      return next(error);
    }
  },
  async updateSizes(req, res, next) {
    try {
      const { nombre, rebanadas, precio } = req.body;

      await Sizes.findByIdAndUpdate(
        { _id: req.params.id },
        {
          nombre,
          rebanadas,
          precio,
        },
        { new: true }
      );

      res.status(200).json({ message: "Tamaño Actualizado" });
    } catch (err) {
      return next(err);
    }
  },
  async deleteSizes(req, res, next) {
    try {
      try {
        await Sizes.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Tamaño eliminado" });
      } catch (err) {
        return next(err);
      }
    } catch (err) {
      return next(err);
    }
  },
  async getByIdSize(req, res, next) {
    let size;
    try {
      size = await Sizes.findOne({ _id: req.params.id }).select(
        "-updatedAt -__v"
      );
    } catch (err) {
      return next(err);
    }

    res.status(200).json(extra);
  },
  async getAllSizes(req, res, next) {
    let sizes;
    console.log("TODAS LAS PIZZAS getAll");
    try {
      sizes = await Sizes.find().select("-updatedAt -__v").sort({ _id: -1 });
    } catch (err) {
      return next(err);
    }

    res.status(200).json(sizes);
  },
};

module.exports = sizeController;
