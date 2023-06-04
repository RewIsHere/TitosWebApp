const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Se ha establecido la conexion con la base de datos");
  } catch (error) {
    console.error(
      `Ha habido un problema al conectar a la base de datos: ${error}`
    );
  }
};

module.exports = connectDB;
