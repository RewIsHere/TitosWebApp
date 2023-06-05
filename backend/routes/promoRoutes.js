const express = require("express");
const promoController = require("../controllers/promoController");
//const auth = require("../middlewares/auth");
//const authAdmin = require("../middlewares/authAdmin");

const router = express.Router();

router
  .route("/promos")
  .get(promoController.getAllPromos)
  .post(promoController.createPromo);

router
  .route("/promos/:id")
  .get(promoController.getByIdPromo)
  .delete(promoController.deletePromos)
  .put(promoController.updatePromos);

module.exports = router;
