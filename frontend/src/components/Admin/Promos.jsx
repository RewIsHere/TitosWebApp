import React from "react";
import "../../styles/test.css";
import Sidebar from "./Sidebar";
import AdminTitle from "./AdminTitle";
import PromoCard from "./PromoCard";
import { RiMenu4Line } from "react-icons/ri";

const Test = () => {
  return (
    <>
      <Sidebar />
      <main className="main-content">
        <AdminTitle
          adminIcono={<RiMenu4Line className="admin-title__icon" />}
          adminTitulo="Promos"
        />
        <div className="promos-list">
          {/*    <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                backgroundColor: "gray",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <div style={{ flex: "1 0 auto" }}>
                <h2>Título</h2>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1, backgroundColor: "red" }}>Columna 1</div>
              <div style={{ flex: 1, backgroundColor: "blue" }}>Columna 2</div>
            </div>
          </div>
*/}
          <PromoCard />
          <PromoCard />
          <PromoCard />
        </div>
      </main>
    </>
  );
};

export default Test;
