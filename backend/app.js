import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import pizzaRoutes from "./routes/pizzaRoutes.js";

const app = express();

import middlewareError from "./middleware/error.js";

app.use(express.json());
app.use(cookieParser());
// app.use(cors());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
//importing routes
app.use("/api/v1", pizzaRoutes);
//app.use("/api/v1", require('./routes/extraRoute'))
//app.use("/api/v1", require('./routes/comboRoute'))
//app.use("/api/v1", require('./routes/sizesRoute'))
//app.use("/api/v1", require('./routes/userRoute'))
//app.use("/api/v1", require('./routes/orderRoute'))
//app.use("/api/v1", require('./routes/paymentRoute'))
//app.use(middlewareError);

export default app;

//import in server.js
