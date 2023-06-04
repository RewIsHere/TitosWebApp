const express = require("express");
const extraController = require("../controllers/extraController");
//const auth = require("../middlewares/auth");
//const authAdmin = require("../middlewares/authAdmin");

const router = express.Router();

router.get("/extras", extraController.getExtras);

router
  .route("/extras")
  .get(extraController.getAllExtras)
  .post(extraController.createExtra);

router
  .route("/extras/:id")
  .get(extraController.getByIdExtra)
  .delete(extraController.deleteExtras)
  .put(extraController.updateExtras);

module.exports = router;
