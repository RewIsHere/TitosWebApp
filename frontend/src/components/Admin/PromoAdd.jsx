import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import {
  createProduct,
  updateProduct,
} from "../../redux/actions/productActions";
import { CREATE_PRODUCT_RESET } from "../../constants/promosConstants";
import "../../styles/test.css";
import Sidebar from "./Sidebar";

const PromoAdd = () => {
  return (
    <>
      <Sidebar />
      <main className="main-content">
        <div className="test-container">Pagina Add Promo XDDD</div>
      </main>
    </>
  );
};

export default PromoAdd;