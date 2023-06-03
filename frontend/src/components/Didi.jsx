import React from "react";

import "../styles/__didi.css";

const Didi = () => {
  return (
    <div className="didi-container">
      <div className="didi-container__bg">
        <div className="didi-info">
          <h2 className="didi-info__title">Encuentranos en DIDI</h2>
          <p className="didi-info__text">
            Descarga la app de Didi Food y realiza cualquier pedido que desees
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.xiaojukeji.didi.global.customer&hl=es_MX&gl=US&pli=1"
            target="_blank"
          >
            <img
              className="didi-info__playstore"
              src="https://titos-pizza-web.rewishere.repl.co/assets/Googleplay.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Didi;
