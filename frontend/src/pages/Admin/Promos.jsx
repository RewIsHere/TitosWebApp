import React from "react";
import "../../styles/promos.css";
import Sidebar from "../../components/Admin/Sidebar";
import AdminTitle from "../../components/Admin/AdminTitle";
import PromoCard from "../../components/Admin/PromoCard";
import { RiMenu4Line } from "react-icons/ri";
import { TiPlus } from "react-icons/ti";
import { Link } from "react-router-dom";

const Promos = () => {
  return (
    <>
      <Sidebar />
      <main className="main-content">
        <AdminTitle
          adminIcono={<RiMenu4Line className="admin-title__icon" />}
          adminTitulo="Promos"
        />
        <div className="admin-btnContainer">
          <Link to="add" className="admin-menu_btnAdd">
            <TiPlus className="admin-menu_icon" />
          </Link>
        </div>

        <div className="promos-list">
          <PromoCard />
          <PromoCard />
          <PromoCard />
        </div>
      </main>
    </>
  );
};

export default Promos;
