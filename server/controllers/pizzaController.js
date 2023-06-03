const Pizzas = require("../models/Pizza");
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

const pizzaController = {
  async getPizzas(req, res, next) {
    try {
      const features = new APIfeatures(Pizzas.find(), req.query)
        .filtering()
        .sorting();

      const pizzas = await features.query;

      if (pizzas.length < 0) {
        return res.status(404).json({
          message: "No se encontro ninguna pizza.",
        });
      }

      res.json({
        status: "success",
        result: pizzas.length,
        pizzas: pizzas,
      });
    } catch (err) {
      return next(err);
    }
  },
  async createPizza(req, res, next) {
    console.log(req.body);
    try {
      const { nombre, descripcion, imagen } = req.body;

      if (!imagen) {
        return next(CustomErrorHandler.badRequest("You must upload image."));
      }
      if (!descripcion || !nombre) {
        return res
          .status(400)
          .json({ message: "You must enter description & name." });
      }

      const pizza = new Pizzas({
        nombre: nombre.toLowerCase(),
        descripcion,
        imagen,
      });

      const savedPizza = await pizza.save();

      res.status(201).json({
        message: `Product has been added successfully!`,
        pizza: savedPizza,
      });
    } catch (error) {
      return next(error);
    }
  },
  async updatePizzas(req, res, next) {
    try {
      const { nombre, descripcion, imagen } = req.body;
      if (!imagen) {
        return next(CustomErrorHandler.badRequest("No image upload"));
      }

      await Pizzas.findOneAndUpdate(
        { _id: req.params.id },
        {
          nombre,
          descripcion,
          imagen,
        },
        { new: true }
      );

      res.status(200).json({ message: "Updated a Product" });
    } catch (err) {
      return next(err);
    }
  },
  async deletePizzas(req, res, next) {
    try {
      try {
        await Pizzas.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Deleted a Product" });
      } catch (err) {
        return next(err);
      }
    } catch (err) {
      return next(err);
    }
  },
  async getByIdPizza(req, res, next) {
    let pizza;
    try {
      pizza = await Pizzas.findOne({ _id: req.params.id }).select(
        "-updatedAt -__v"
      );
    } catch (err) {
      return next(err);
    }

    res.status(200).json(pizza);
  },
  async getAllPizzas(req, res, next) {
    let pizzas;
    try {
      pizzas = await Pizzas.find().select("-updatedAt -__v").sort({ _id: -1 });
    } catch (err) {
      return next(err);
    }

    res.status(200).json(pizzas);
  },
};

module.exports = pizzaController;
