const Extras = require("../models/Extra");
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

const comboController = {
  async getCombos(req, res, next) {
    try {
      const features = new APIfeatures(Combos.find(), req.query)
        .filtering()
        .sorting();

      const combos = await features.query;

      if (combos.length < 0) {
        return res.status(404).json({
          message: "No se encontro ningun combo.",
        });
      }

      res.json({
        status: "success",
        result: combos.length,
        combos: combos,
      });
    } catch (err) {
      return next(err);
    }
  },
  async createCombo(req, res, next) {
    console.log(req.body);
    try {
      const { nombre, descripcion, imagen, precio, pizzas, extras } = req.body;

      if (!imagen) {
        return next(
          CustomErrorHandler.badRequest("Necesitas subir una imagen.")
        );
      }
      if (!descripcion || !nombre) {
        return res.status(400).json({
          message: "Tienes que proporcionar un nombre y una descripcion.",
        });
      }
      if (!pizzas || !extras) {
        return res.status(400).json({
          message:
            "Tienes que proporcionar una o varias pizzas y una o varios extras.",
        });
      }

      const combo = new Combos({
        nombre: nombre.toLowerCase(),
        descripcion,
        imagen,
        precio,
        pizzas,
        extras,
      });

      const savedCombo = await combo.save();

      res.status(201).json({
        message: `El combo se ha agregado correctamente`,
        combo: savedCombo,
      });
    } catch (error) {
      return next(error);
    }
  },
  async updateCombos(req, res, next) {
    try {
      const { nombre, descripcion, imagen } = req.body;
      if (!imagen) {
        return next(CustomErrorHandler.badRequest("No image upload"));
      }

      await Combos.findByIdAndUpdate(
        { _id: req.params.id },
        {
          nombre,
          descripcion,
          imagen,
          precio,
          pizzas,
          imagen,
        },
        { new: true }
      );

      res.status(200).json({ message: "Combo Actualizado" });
    } catch (err) {
      return next(err);
    }
  },
  async deleteCombos(req, res, next) {
    try {
      try {
        await Combos.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Combo eliminado" });
      } catch (err) {
        return next(err);
      }
    } catch (err) {
      return next(err);
    }
  },
  async getByIdCombo(req, res, next) {
    let combo;
    try {
      combo = await Combos.findOne({ _id: req.params.id }).select(
        "-updatedAt -__v"
      );
    } catch (err) {
      return next(err);
    }

    res.status(200).json(pizza);
  },
  async getAllCombos(req, res, next) {
    let combos;
    try {
      combos = await Combos.find().select("-updatedAt -__v").sort({ _id: -1 });
    } catch (err) {
      return next(err);
    }

    res.status(200).json(pizzas);
  },
};

module.exports = comboController;
