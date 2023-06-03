import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import PizzaCard from "../components/Menu/PizzaCard";
import SizesCard from "../components/Menu/SizesCard";
import ComboCard from "../components/Menu/ComboCard";
import ExtrasTable from "../components/Menu/ExtrasTable";
import Footer from "../components/Footer";
import "../styles/menu.css";

const Menu = (props) => {
  return (
    <div className="menu-container">
      <Navbar rootClassName="navbar-root-class-name1"></Navbar>
      <PageTitle
        Titulo="MENU"
        rootClassName="page-title-root-class-name"
      ></PageTitle>

      <Tabs>
        <TabList className="menu-tabs-container">
          <Tab className="menu-tabs-tab">
            <span className="menu-tabs-text">Pizzas</span>
          </Tab>
          <Tab className="menu-tabs-tab">
            <span className="menu-tabs-text">Combos y Extras</span>
          </Tab>
        </TabList>

        <TabPanel>
          <section className="menu-section">
            <div className="menu-pizza-grid">
              <PizzaCard
                Titulo="Peperoni"
                Ingredientes="Queso, Peperoni, Carne"
                rootClassName="pizza-card-root-class-name"
              ></PizzaCard>
              <PizzaCard
                Titulo="Vegetariana"
                Ingredientes="prueba"
                rootClassName="pizza-card-root-class-name"
              ></PizzaCard>
            </div>
          </section>
          <h1 className="menu-tamanos">TAMAÑOS</h1>
          <section className="sizes-section">
            <div className="menu-sizes-grid">
              <SizesCard
                Titulo="INDIVIDUAL"
                rootClassName="sizes-card-root-class-name"
              ></SizesCard>
              <SizesCard
                Precio="$140"
                Titulo="CHICA"
                Rebanadas="PIZZA DE 6 REBANADAS"
                rootClassName="sizes-card-root-class-name1"
              ></SizesCard>
              <SizesCard
                Precio="$170"
                Titulo="MEDIANA"
                Rebanadas="PIZZA DE 8 REBANADAS"
                rootClassName="sizes-card-root-class-name3"
              ></SizesCard>
              <SizesCard
                Precio="$220"
                Titulo="GRANDE"
                Rebanadas="PIZZA DE 12 REBANADAS"
                rootClassName="sizes-card-root-class-name2"
              ></SizesCard>
              <SizesCard
                Precio="$250"
                Titulo="SUPER"
                Rebanadas="PIZZA DE 16 REBANADAS"
                rootClassName="sizes-card-root-class-name5"
              ></SizesCard>
              <SizesCard
                Precio="$360"
                Titulo="PATRONA"
                Rebanadas="PIZZA DE 24 REBANADAS"
                rootClassName="sizes-card-root-class-name4"
              ></SizesCard>
            </div>
          </section>
        </TabPanel>
        <TabPanel>
          <div className="menu-sizes-grid">
            <ComboCard />
            <ComboCard />
            <ComboCard />
            <ComboCard />
          </div>
          <ExtrasTable />
        </TabPanel>
      </Tabs>

      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  );
};

export default Menu;
