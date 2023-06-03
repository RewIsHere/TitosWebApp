import React, { useEffect } from "react";
import { Carousel, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listPromos } from "../actions/promosActions";
import "../styles/__slider.css";

const Slider = () => {
  const dispatch = useDispatch();

  const promosList = useSelector((state) => state.promosList);
  console.log(listPromos);
  const { loading, error, promos } = promosList;

  useEffect(() => {
    dispatch(listPromos());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Carousel
      pause="hover"
      className="bg-dark"
      style={{ width: "100%", height: "100vh" }}
    >
      {promos.map((promo) => (
        <Carousel.Item
          key={promo.id}
          style={{ width: "100%", height: "100vh" }}
        >
          <img
            src={promo.image}
            alt="Promo"
            className="d-block w-100 h-100"
            style={{ objectFit: "cover" }}
          />
          <div className="overlay"></div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
