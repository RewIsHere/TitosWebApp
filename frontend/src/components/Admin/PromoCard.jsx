import React from "react";
import PropTypes from "prop-types";
import "../../styles/__promocard.css";
import { FiEdit2, FiTrash } from "react-icons/fi";

const PromoCard = ({ promoTitulo, promoImg }) => {
  return (
    <>
      <div className="promo-container">
        <div className="promo-titulo">
          <h2 className="promo-titulo__text">{promoTitulo}</h2>
        </div>
        <div className="promo-body">
          <div className="promo-body__left">
            <img src={promoImg} alt={promoTitulo} className="promo__img" />
          </div>
          <div className="promo-body__right">
            <button className="promo-body__btnEdit">
              <FiEdit2 className="promo-body__btnIcon" />
              Editar
            </button>
            <button className="promo-body__btnDel">
              <FiTrash className="promo-body__btnIcon" />
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

PromoCard.defaultProps = {
  promoTitulo: "Promo #6bdhsadd13",
  promoImg: "https://titos-pizza-web.rewishere.repl.co/assets/bg_slider1.png",
};

PromoCard.propTypes = {
  promoTitulo: PropTypes.string,
  promoImg: PropTypes.string,
};

export default PromoCard;
