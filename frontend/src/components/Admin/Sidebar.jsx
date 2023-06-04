import React from "react";
import { NavLink } from "react-router-dom";
import {
  BiHomeAlt2,
  BiBookContent,
  BiBasket,
  BiPurchaseTagAlt,
  BiLogOutCircle,
} from "react-icons/bi";

import { CiPizza } from "react-icons/ci";

import "../../styles/__sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <ul className="sidebar__nav">
        <li className="sidebar__item-header">
          <img
            className="sidebar__logo"
            src="https://titos-pizza-web.rewishere.repl.co/assets/Logo.png"
            alt="Logo"
          />
        </li>
        <li className="sidebar__item">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <BiHomeAlt2 className="sidebar__icon" />
            INICIO
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink
            to="/admin/menu"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <BiBookContent className="sidebar__icon" />
            MENU
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink
            to="/admin/promos"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <BiPurchaseTagAlt className="sidebar__icon" />
            PROMOS
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink
            to="/admin/pedidos"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <BiBasket className="sidebar__icon" />
            PEDIDOS
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
