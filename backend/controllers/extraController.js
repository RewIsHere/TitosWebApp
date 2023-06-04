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

const extraController = {
  async getExtras(req, res, next) {
    try {
      const features = new APIfeatures(Extras.find(), req.query)
        .filtering()
        .sorting();

      const extras = await features.query;

      if (extras.length < 0) {
        return res.status(404).json({
          message: "No se encontro ningun combo.",
        });
      }

      res.json({
        status: "success",
        result: extras.length,
        extras: extras,
      });
    } catch (err) {
      return next(err);
    }
  },
  async createExtra(req, res, next) {
    console.log(req.body);
    try {
      const { nombre, precio } = req.body;

      if (!nombre || !precio) {
        return res.status(400).json({
          message: "Tienes que proporcionar un nombre y un precio.",
        });
      }

      const extra = new Extras({
        nombre: nombre.toLowerCase(),
        precio,
      });

      const savedExtra = await extra.save();

      res.status(201).json({
        message: `El extra se ha agregado correctamente`,
        extra: savedExtra,
      });
    } catch (error) {
      return next(error);
    }
  },
  async updateExtras(req, res, next) {
    try {
      const { nombre, precio } = req.body;

      await Extras.findByIdAndUpdate(
        { _id: req.params.id },
        {
          nombre,
          precio,
        },
        { new: true }
      );

      res.status(200).json({ message: "Extra Actualizado" });
    } catch (err) {
      return next(err);
    }
  },
  async deleteExtras(req, res, next) {
    try {
      try {
        await Extras.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Extra eliminado" });
      } catch (err) {
        return next(err);
      }
    } catch (err) {
      return next(err);
    }
  },
  async getByIdExtra(req, res, next) {
    let extra;
    try {
      extra = await Extras.findOne({ _id: req.params.id }).select(
        "-updatedAt -__v"
      );
    } catch (err) {
      return next(err);
    }

    res.status(200).json(extra);
  },
  async getAllExtras(req, res, next) {
    let extras;
    try {
      extras = await Extras.find().select("-updatedAt -__v").sort({ _id: -1 });
    } catch (err) {
      return next(err);
    }

    res.status(200).json(extras);
  },
};

module.exports = extraController;
