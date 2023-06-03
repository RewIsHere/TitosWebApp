import React from "react";
import TimelineItem from "./TimelineItem";
import "../styles/__timeline.css";

const Timeline = () => {
  return (
    <div className="timeline">
      <ul>
        <TimelineItem
          title="¿Quienes somos?"
          imageSrc="https://titos-pizza-web.rewishere.repl.co/assets/1v2.jpg"
          description="Somos una pequeña pizzería con ganas de ser de las mejores de Poza Rica, iniciamos con muchas ganas, pero a la vez con miedos."
          date="Enero 2018"
        />
        <TimelineItem
          title="Nuestros inicios"
          imageSrc="https://titos-pizza-web.rewishere.repl.co/assets/1v2.jpg"
          description="Nos fuimos dando a conocer mucho por las redes sociales, nuestras amistades ayudaron a que cada día nos fueran escuchando, así pasó un año y lo logramos, día a día sin descanso hemos llegado a posicionarnos como una de las mejores pizzerías de Poza Rica, gracias a ustedes."
          date="Enero 2018"
        />
        <TimelineItem
          title="Algunos imprevistos en el camino"
          imageSrc="https://titos-pizza-web.rewishere.repl.co/assets/1v2.jpg"
          description="En mayo del 2020 ocurrió lo peor; un accidente freno nuestro trabajo, se había incendiado nuestro negocio, la mayor parte del negocio se había consumido. A pesar de lo sucedido las muestras de apoyo de nuestros clientes no sesaron, nos dieron la fuerza suficiente para reponernos."
          date="Enero 2018"
        />
        <TimelineItem
          title="Nuevos comienzos"
          imageSrc="https://titos-pizza-web.rewishere.repl.co/assets/1v2.jpg"
          description="Mensajes dándonos todo su apoyo, amigos que nos brindaron su mano, fuerza física y económica la cual estará siempre en nuestra mente y corazón, a una semana de lo sucedido, comenzamos a trabajar en nuestro Food Truck."
          date="Enero 2018"
        />
        <TimelineItem
          title="Food Truck"
          imageSrc="https://titos-pizza-web.rewishere.repl.co/assets/1v2.jpg"
          description="Este camioncito nos ayudó a volver al trabajo y con nuestros clientes que nos apoyaron incondicionalmente, la alegría volvió a nosotros y desde ese entonces seguimos aquí, recibiendo a nuestros amigos (clientes), en 4 años que ya tenemos hasta este momento."
          date="Enero 2018"
        />
        <TimelineItem
          title="Actualmente"
          imageSrc="https://titos-pizza-web.rewishere.repl.co/assets/1v2.jpg"
          description="Ya somos 3 pizzerías en Poza Rica, Tuxpan, Papantla y un Food Truck. Seguimos adelante con el mismo"
          date="Enero 2018"
        />
      </ul>
    </div>
  );
};

export default Timeline;
