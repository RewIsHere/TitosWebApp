import React from "react";

import HeaderButton from "../components/HeaderButton";
import Loc from "../components/Loc";
import Didi from "../components/Didi";
import Slider from "../components/Slider";
import Separator from "../components/Separator";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import "../styles/home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Loc />
      <section className="header">
        <div className="slogan-container">
          <h1 className="header__slogan">
            No puedes comprar la felicidad, pero si una pizza Tito's que es casi
            lo mismo
          </h1>
        </div>
        <Separator />
        <h1 className="home-title">EXPLORA EL MENU</h1>
        <section className="test-container">
          <div className="menu-container__menu-grid">
            <HeaderButton
              btnTitulo={"Combos y Promociones"}
              btnLink={"menu"}
              btnImage={"../src/assets/imgOne.png"}
            />
            <HeaderButton
              btnTitulo={"Tamaños"}
              btnLink={"menu"}
              btnImage={"../src/assets/imgTwo.png"}
            />
            <HeaderButton
              btnTitulo={"Extras"}
              btnLink={"menu"}
              btnImage={"../src/assets/imgThree.png"}
            />
          </div>
        </section>
      </section>

      <Separator />
      <h1 className="home-title">VIVE LA EXPERIENCIA TITO'S</h1>
      <Didi />
      <Footer />
    </>
  );
};

export default Home;
