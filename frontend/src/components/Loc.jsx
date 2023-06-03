import React from "react";
import "../styles/__location.css";

const Location = () => {
  return (
    <div className="location">
      <div className="location__location-container">
        <img
          className="location__img"
          src="https://titos-pizza-web.rewishere.repl.co/assets/PizzaDeliver.png"
        />
        <h1>Encuentra tu sucursal mas cercana</h1>
        <div className="location__box">
          <input
            type="text"
            className="location__box-search"
            placeholder="Ciudad o direccion"
          />
          <button className="location__box-button">
            <i className="gg-pin"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Location;
