const express = require("express");
const sizeController = require("../controllers/sizeController");
//const auth = require("../middlewares/auth");
//const authAdmin = require("../middlewares/authAdmin");

const router = express.Router();

router.get("/sizes", sizeController.getSizes);

router
  .route("/sizes")
  .get(sizeController.getAllSizes)
  .post(sizeController.createSize);

router
  .route("/sizes/:id")
  .get(sizeController.getByIdSize)
  .delete(sizeController.deleteSizes)
  .put(sizeController.updateSizes);

module.exports = router;
