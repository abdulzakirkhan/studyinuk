"use client";
import React from "react";
import Slider from "react-slick";
function SliderComponent({ cardsData }) {
  var settings = {
    arrows: true, 
    dots: false,
    infinite: true, 
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1, 
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
          dots: false, 
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false, 
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="overflow-hidden ">
      {cardsData.map((card, index) => (
        <div key={index} className="col-md-3">
          <div className="card border-0 w-100 cardCust">
            <img
              src={`/${card.img}`}
              className="card-img-top"
              alt={card.title}
            />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}



export default SliderComponent;
