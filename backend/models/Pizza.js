const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pizzaSchema = new Schema(
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
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pizza", pizzaSchema, "pizzas");
