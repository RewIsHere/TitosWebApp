import React from "react";

import "../styles/__footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-container__box">
          <div className="footer-container__logo">
            <img
              src="https://titos-pizza-web.rewishere.repl.co/assets/Logo.png"
              alt=""
            />
          </div>
          <div className="footer-container__company">
            <p>© 2023 Tito's Pizza. Todos los derechos reservados.</p>
          </div>
        </div>

        <div className="footer-container__box">
          <h2>Enlaces</h2>
          <a href="sucursales.html">Sucursales</a>
          <a href="menu.html">Menu</a>
          <a href="nosotros.html">Nosotros</a>
          <a href="adminlogin.html">Admin</a>
        </div>

        <div className="footer-container__box">
          <h2>Redes Sociales</h2>
          <a href="https://m.facebook.com/profile.php?id=100057658321392">
            {" "}
            <i className="fab fa-facebook-square"></i>
            Facebook
          </a>
          <a href="https://wa.me/527821009428">
            <i className="fa-brands fa-whatsapp"></i> WhatsApp
          </a>
          <a href="https://www.instagram.com/titospizzeria27/">
            <i className="fab fa-instagram-square"></i> Instagram
          </a>
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>
          Diseñado y Programado por <b>Axolotl Digital Studios</b>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
