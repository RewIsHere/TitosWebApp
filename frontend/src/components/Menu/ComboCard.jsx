import React from "react";

import PropTypes from "prop-types";

import "../../styles/__combocard.css";

const ComboCard = (props) => {
  return (
    <div className={`combo-card-container ${props.rootClassName} `}>
      <div className="combo-card-wrapper">
        <div className="combo-card-nombre">
          <h1 className="combo-card-text">{props.Titulo}</h1>
        </div>
        <div className="combo-card-contenido">
          <div className="combo-card-container1">
            <span className="combo-card-text1">{props.Contenido}</span>
          </div>
          <div className="combo-card-container2">
            <img
              alt={props.image_alt}
              src={props.Combo_Img}
              className="combo-card-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ComboCard.defaultProps = {
  image_alt: "image",
  Contenido: "ESTE ES EL CONTENIDO DEL COMBO",
  rootClassName: "",
  Titulo: "Heading",
  Combo_Img:
    "https://titos-pizza-web.rewishere.repl.co/assets/Titos%20especial.png",
};

ComboCard.propTypes = {
  image_alt: PropTypes.string,
  Contenido: PropTypes.string,
  rootClassName: PropTypes.string,
  Titulo: PropTypes.string,
  Combo_Img: PropTypes.string,
};

export default ComboCard;
