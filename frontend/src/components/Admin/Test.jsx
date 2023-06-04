import React from "react";
import "../../styles/test.css";
import Sidebar from "./Sidebar";
import Pizza from "./Pizza";
import AdminTitle from "./AdminTitle";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { TiPlus } from "react-icons/ti";
import { RiMenu4Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Test = () => {
  return (
    <>
      <Sidebar />
      <main className="main-content">
        <AdminTitle
          adminIcono={<RiMenu4Line className="admin-title__icon" />}
          adminTitulo="Menu"
        />
        <Tabs>
          <TabList className="admin-menu-container">
            <Tab className="admin-menu__tab">
              <span className="admin-menu__text">Pizzas</span>
            </Tab>
            <Tab className="admin-menu__tab">
              <span className="admin-menu__text">Combos</span>
            </Tab>
            <Tab className="admin-menu__tab">
              <span className="admin-menu__text">Extras</span>
            </Tab>
            <Tab className="admin-menu__tab">
              <span className="admin-menu__text">Tamaños</span>
            </Tab>
          </TabList>
          <TabPanel>
            <div className="admin-header">
              <Link to="addpizza" className="admin-menu_btnAdd">
                <TiPlus />
              </Link>
            </div>{" "}
            <div className="pizza-admin-grid">
              <Pizza
                pizzaTitulo="Peperoni"
                pizzaImg="https://titos-pizza-web.rewishere.repl.co/assets/Titos%20especial.png"
              />
              <Pizza
                pizzaTitulo="Peperoni"
                pizzaImg="https://titos-pizza-web.rewishere.repl.co/assets/Titos%20especial.png"
              />
              <Pizza
                pizzaTitulo="Peperoni"
                pizzaImg="https://titos-pizza-web.rewishere.repl.co/assets/Titos%20especial.png"
              />
              <Pizza
                pizzaTitulo="Peperoni"
                pizzaImg="https://titos-pizza-web.rewishere.repl.co/assets/Titos%20especial.png"
              />
              <Pizza
                pizzaTitulo="Peperoni"
                pizzaImg="https://titos-pizza-web.rewishere.repl.co/assets/Titos%20especial.png"
              />
              <Pizza
                pizzaTitulo="Peperoni"
                pizzaImg="https://titos-pizza-web.rewishere.repl.co/assets/Titos%20especial.png"
              />
              <Pizza
                pizzaTitulo="Peperoni"
                pizzaImg="https://titos-pizza-web.rewishere.repl.co/assets/Titos%20especial.png"
              />
              <Pizza
                pizzaTitulo="Peperoni"
                pizzaImg="https://titos-pizza-web.rewishere.repl.co/assets/Titos%20especial.png"
              />
              <Pizza
                pizzaTitulo="Peperoni"
                pizzaImg="https://titos-pizza-web.rewishere.repl.co/assets/Titos%20especial.png"
              />
              <Pizza
                pizzaTitulo="Peperoni"
                pizzaImg="https://titos-pizza-web.rewishere.repl.co/assets/Titos%20especial.png"
              />
            </div>
          </TabPanel>
          <TabPanel>
            {" "}
            <div className="pizza-admin-grid">
              <Pizza
                pizzaTitulo="Peperoni"
                pizzaImg="https://titos-pizza-web.rewishere.repl.co/assets/Titos%20especial.png"
              />
              <Pizza
                pizzaTitulo="Peperoni"
                pizzaImg="https://titos-pizza-web.rewishere.repl.co/assets/Titos%20especial.png"
              />
              <Pizza
                pizzaTitulo="Peperoni"
                pizzaImg="https://titos-pizza-web.rewishere.repl.co/assets/Titos%20especial.png"
              />
              <Pizza
                pizzaTitulo="Peperoni"
                pizzaImg="https://titos-pizza-web.rewishere.repl.co/assets/Titos%20especial.png"
              />
              <Pizza
                pizzaTitulo="Peperoni"
                pizzaImg="https://titos-pizza-web.rewishere.repl.co/assets/Titos%20especial.png"
              />
              <Pizza
                pizzaTitulo="Peperoni"
                pizzaImg="https://titos-pizza-web.rewishere.repl.co/assets/Titos%20especial.png"
              />
              <Pizza
                pizzaTitulo="Peperoni"
                pizzaImg="https://titos-pizza-web.rewishere.repl.co/assets/Titos%20especial.png"
              />
              <Pizza
                pizzaTitulo="Peperoni"
                pizzaImg="https://titos-pizza-web.rewishere.repl.co/assets/Titos%20especial.png"
              />
              <Pizza
                pizzaTitulo="Peperoni"
                pizzaImg="https://titos-pizza-web.rewishere.repl.co/assets/Titos%20especial.png"
              />
              <Pizza
                pizzaTitulo="Peperoni"
                pizzaImg="https://titos-pizza-web.rewishere.repl.co/assets/Titos%20especial.png"
              />
            </div>
          </TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </main>
    </>
  );
};

export default Test;
