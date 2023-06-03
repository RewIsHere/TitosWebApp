const express = require("express");
const pizzaController = require("../controllers/pizzaController");
//const auth = require("../middlewares/auth");
//const authAdmin = require("../middlewares/authAdmin");

const router = express.Router();

router.get("/pizzas", pizzaController.getPizzas);

router
  .route("/pizzas")
  .get(pizzaController.getAllPizzas)
  .post(pizzaController.createPizza);

router
  .route("/pizzas/:id")
  .get(pizzaController.getByIdPizza)
  .delete(pizzaController.deletePizzas)
  .put(pizzaController.updatePizzas);

module.exports = router;
