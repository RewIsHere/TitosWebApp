const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const comboSchema = new Schema(
  {
    nombre: {
      type: String,
      required: [true, "Por favor introduce un nombre!"],
      trim: true,
    },
    descripcion: {
      type: String,
      required: [true, "Por favor introduce una descripcion!"],
      trim: true,
    },
    imagen: {
      type: Object,
      required: true,
    },
    precio: {
      type: Number,
      required: true,
    },
    pizzas: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pizza",
      },
    ],
    extras: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Extra",
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Combo", comboSchema, "combos");
