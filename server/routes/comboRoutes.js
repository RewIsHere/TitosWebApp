const express = require("express");
const comboController = require("../controllers/comboController");
//const auth = require("../middlewares/auth");
//const authAdmin = require("../middlewares/authAdmin");

const router = express.Router();

router.get("/combos", comboController.getCombos);

router
  .route("/combos")
  .get(comboController.getAllCombos)
  .post(comboController.createCombo);

router
  .route("/combos/:id")
  .get(comboController.getByIdCombo)
  .delete(comboController.deleteCombos)
  .put(comboController.updateCombos);

module.exports = router;
