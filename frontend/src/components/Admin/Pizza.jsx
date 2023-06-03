import React from "react";
import PropTypes from "prop-types";
import "../../styles/__pizza.css";

const Pizza = ({ pizzaTitulo, pizzaImg }) => {
  return (
    <>
      <div className="pizza-container">
        <h2 className="pizza__titulo">{pizzaTitulo}</h2>
        <img src={pizzaImg} alt={pizzaTitulo} className="pizza__img" />
      </div>
    </>
  );
};

Pizza.defaultProps = {
  pizzaTitulo: "Heading",
  pizzaImg:
    "https://titos-pizza-web.rewishere.repl.co/assets/Titos%20especial.png",
};

Pizza.propTypes = {
  pizzaTitulo: PropTypes.string,
  pizzaImg: PropTypes.string,
};

export default Pizza;
