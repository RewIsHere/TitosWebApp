import React from "react";

import PropTypes from "prop-types";

import "../../styles/__pizzacard.css";

const PizzaCard = (props) => {
  return (
    <div className={`pizza-card-container ${props.rootClassName} `}>
      <div className="pizza-card-wrapper">
        <div className="pizza-card-nombre">
          <h1 className="pizza-card-text">{props.Titulo}</h1>
        </div>
        <div className="pizza-card-contenido">
          <span className="pizza-card-text1">{props.Ingredientes}</span>
          <img
            alt={props.image_alt}
            src={props.Pizza_img}
            className="pizza-card-image"
          />
        </div>
      </div>
    </div>
  );
};

PizzaCard.defaultProps = {
  image_alt: "image",
  Titulo: "Heading",
  Ingredientes: "Test",
  Pizza_img:
    "https://titos-pizza-web.rewishere.repl.co/assets/Titos%20especial.png",
  rootClassName: "",
};

PizzaCard.propTypes = {
  image_alt: PropTypes.string,
  Titulo: PropTypes.string,
  Ingredientes: PropTypes.string,
  Pizza_img: PropTypes.string,
  rootClassName: PropTypes.string,
};

export default PizzaCard;
