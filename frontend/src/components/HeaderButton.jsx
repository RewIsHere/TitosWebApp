import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/__headerbutton.css";

const HeaderButton = ({ btnTitulo, btnLink, btnImage }) => {
  return (
    <div className="test-container">
      <Link className="menu-card" to={`/${btnLink}`}>
        <div
          className="menu-card__background"
          style={{ backgroundImage: `url(${btnImage})` }}
        ></div>
        <div className="menu-card__content">
          <h3 className="menu-card__heading">{btnTitulo}</h3>
        </div>
      </Link>
    </div>
  );
};

HeaderButton.defaultProps = {
  btnTitulo: "Heading",
  btnImage:
    "https://titos-pizza-web.rewishere.repl.co/assets/Titos%20especial.png",
  btnLink: "xd",
};

HeaderButton.propTypes = {
  btnTitulo: PropTypes.string,
  btnImage: PropTypes.string,
  btnLink: PropTypes.string,
};

export default HeaderButton;
