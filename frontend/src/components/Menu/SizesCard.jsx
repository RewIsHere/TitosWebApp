import React from "react";

import PropTypes from "prop-types";

import "../../styles/__sizescard.css";

const SizesCard = (props) => {
  return (
    <div className={`sizes-card-container ${props.rootClassName} `}>
      <div className="sizes-card-wrapper">
        <div className="sizes-card-nombre">
          <h1 className="sizes-card-text">{props.Titulo}</h1>
        </div>
        <div className="sizes-card-contenido">
          <span className="sizes-card-text1">{props.Rebanadas}</span>
          <span className="sizes-card-text2">{props.Precio}</span>
        </div>
      </div>
    </div>
  );
};

SizesCard.defaultProps = {
  rootClassName: "",
  Precio: "$100",
  Titulo: "Heading",
  Rebanadas: "PIZZA DE 6 REBANADAS",
};

SizesCard.propTypes = {
  rootClassName: PropTypes.string,
  Precio: PropTypes.string,
  Titulo: PropTypes.string,
  Rebanadas: PropTypes.string,
};

export default SizesCard;
