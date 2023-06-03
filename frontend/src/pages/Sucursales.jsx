import React from "react";
import ImageSection from "../components/Sucursales/ImageSection";
import MapSection from "../components/Sucursales/MapSection";
import ContactSection from "../components/Sucursales/ContactSection";
import "../styles/sucursales.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";

const Section1 = () => (
  <section>
    <div className="container">
      <div className="row">
        <MapSection
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7472.546734867176!2d-97.466976!3d20.535993!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85da6ac44f84f2ad%3A0x5a47b59dc8e72ff6!2sTito&#39;s%20Pizzeria!5e0!3m2!1ses-419!2smx!4v1684813300730!5m2!1ses-419!2smx"
          isImageLeft={true}
        />
        <ImageSection src="https://titos-pizza-web.rewishere.repl.co/assets/poza2.jpg" />
      </div>
    </div>
    <ContactSection
      title="POZA RICA"
      address="C. República del Salvador 302, 27 de Septiembre, 93320 Poza Rica de Hidalgo, Ver."
      phoneNumber="782 100 94 28"
      facebookLink="https://www.facebook.com/TitosPizzeria27"
      instagramLink="https://instagram.com/titospizzeria27?igshid=YmMyMTA2M2Y="
    />
  </section>
);

const Section2 = () => (
  <section>
    <div className="container">
      <div className="row">
        <ImageSection src="https://titos-pizza-web.rewishere.repl.co/assets/papantla2.jpg" />
        <MapSection
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3738.502410202264!2d-97.327664!3d20.444548!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85da4550cb10e15f%3A0x1882df4cfbc393b3!2sTitos%20pizzeria%20papantla!5e0!3m2!1ses-419!2smx!4v1684813229484!5m2!1ses-419!2smx"
          isImageLeft={false}
        />
      </div>
    </div>
    <ContactSection
      title="PAPANTLA"
      address="Calle, 3 de mayo esquina con miguel negrete 207, Barrio del Zapote, 93400 Papantla de Olarte, Ver."
      phoneNumber="784 119 00 12"
      facebookLink="https://www.facebook.com/titospizzeriapapantla"
      instagramLink="https://instagram.com/titospizzeriapapantla?igshid=YmMyMTA2M2Y="
    />
  </section>
);

const Section3 = () => (
  <section>
    <div className="container">
      <div className="row">
        <MapSection
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7452.415629374385!2d-97.378806!3d20.944168!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d98b7a85b53a0d%3A0x226b09ec153ee3d0!2zVGl0b-KAmXMgUGl6emVyw61hIFR1eHBhbg!5e0!3m2!1ses-419!2smx!4v1684813084220!5m2!1ses-419!2smx"
          isImageLeft={true}
        />
        <ImageSection src="https://titos-pizza-web.rewishere.repl.co/assets/tuxpan2.jpg" />
      </div>
    </div>
    <ContactSection
      title="TUXPAN"
      address="Av. Cuauhtémoc 92, Enrique Rodriguez Cano, 92880 Túxpam de Rodríguez Cano, Ver."
      phoneNumber="783 115 22 62"
      facebookLink="https://www.facebook.com/TitosTuxpan"
    />
  </section>
);

const App = () => (
  <>
    <Navbar />
    <PageTitle Titulo={"VISITANOS EN"} />
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
    <Footer />
  </>
);

export default App;
