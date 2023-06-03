import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/__navbar.css";

const Navbar = () => {
  useEffect(() => {
    const navbar = document.querySelector(".navegacion");

    const handleScroll = () => {
      if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div id="navegacion-top" className="navegacion">
        <ul className="navegacion__navegacion-list navegacion__menu">
          <li>
            <Link to="/" className="active">
              INICIO
            </Link>
          </li>
          <li>
            <Link to="/sucursales">SUCURSALES</Link>
          </li>
          <li>
            <Link to="/">
              <img
                src="https://titos-pizza-web.rewishere.repl.co/assets/Logo.png"
                alt="Tito's Pizza Logo"
              />
            </Link>
          </li>
          <li>
            <Link to="/menu">MENU</Link>
          </li>
          <li>
            <Link to="/nosotros">NOSOTROS</Link>
          </li>
        </ul>
        <div className="navegacion__navegacion-list">
          <a
            href="javascript:void(0);"
            className="navegacion__icon"
            onclick="showMenu()"
          >
            <i className="gg-details-more"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
