const Promos = require("../models/Promo");
const CustomErrorHandler = require("../services/CustomErrorHandler");

const promoController = {
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
      promos = await Promos.find().select("-updatedAt -__v");
    } catch (err) {
      return next(err);
    }

    res.status(200).json(promos);
  },
};

module.exports = promoController;
