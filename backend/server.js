require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const connectDb = require("./db");
const errorHandler = require("./middleware/errorHandler");
const pizzaRoutes = require("./routes/pizzaRoutes");
const comboRoutes = require("./routes/comboRoutes");
const extraRoutes = require("./routes/extraRoutes");
const sizeRoutes = require("./routes/sizeRoutes");
const promoRoutes = require("./routes/promoRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// category routes
app.use("/api/v1", pizzaRoutes);
app.use("/api/v1", comboRoutes);
app.use("/api/v1", extraRoutes);
app.use("/api/v1", sizeRoutes);
app.use("/api/v1", promoRoutes);
app.use("/api/v1", uploadRoutes);

// Database connection
connectDb();

// delpoy code

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// declareing the port here
const PORT = process.env.PORT || 5000;

// custom error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
