import React from "react";

import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import Footer from "../components/Footer";
import Timeline from "../components/Timeline";
import "../styles/nosotros.css";

const Nosotros = (props) => {
  return (
    <div className="menu-container">
      <Navbar />
      <PageTitle Titulo="HISTORIA DE TITO'S"></PageTitle>
      <Timeline />
      <Footer />
    </div>
  );
};

export default Nosotros;
