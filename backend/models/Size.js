const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sizeSchema = new Schema(
  {
    nombre: {
      type: String,
      required: [true, "Por favor introduce un nombre!"],
      trim: true,
    },
    rebanadas: {
      type: Number,
      required: true,
    },
    precio: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Size", sizeSchema, "sizes");
