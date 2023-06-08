import React, { useEffect, useState } from "react";
import "../../styles/promos.css";
import Sidebar from "./Sidebar";
import AdminTitle from "./AdminTitle";
import { ImArrowLeft2 } from "react-icons/im";
import { Link } from "react-router-dom";

const PromoAdd = () => {
  return (
    <>
      <Sidebar />
      <main className="main-content">
        <div className="admin-header">
          <Link to="/admin/promos" className="backBtn">
            <ImArrowLeft2 className="backbtn__icon" />
          </Link>
          <AdminTitle adminTitulo="Agregar Promo" />
        </div>

        <div className="form-box">
          <form className="form-container">
            <div className="form-container__body">
              <div className="form-container__left">
                <div className="input-container">
                  <label htmlFor="promo" className="input-container__label">
                    Titulo de la Promocion:
                  </label>
                  <input
                    type="text"
                    name="promo"
                    id="promo"
                    placeholder="Escribe un titulo"
                    className="input-container__input"
                  />
                </div>
                <div className="input-container">
                  <label
                    htmlFor="desc_promo"
                    className="input-container__label"
                  >
                    Descripcion de la promocion:
                  </label>
                  <textarea
                    className="input-container__input"
                    name="desc_promo"
                    id="desc_promo"
                    rows="7"
                    column="10"
                    placeholder="Escribe una descripcion"
                  />
                </div>
              </div>
              <div className="form-container__right">
                <div className="input-container__file">
                  <input
                    type="file"
                    name="file"
                    id="file_up"
                  />
                </div>
              </div>
            </div>

            <div className="form-container__footer">
              <button type="submit" className="form-container__btn">Agregar</button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default PromoAdd;
