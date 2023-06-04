const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const promoSchema = new Schema(
  {
    nombre: {
      type: String,
      trim: true,
    },
    descripcion: {
      type: String,
      trim: true,
    },
    imagen: {
      type: Object,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Promo", promoSchema, "promos");
