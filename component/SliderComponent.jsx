"use client";
import React from "react";
import Slider from "react-slick";
import style from "../styles/newsblgs.module.css"

function SliderComponent() {
  const cardsData=[
    {title:"lorem ipsum dolor sit amet consecuter",description:`Lorem ipsum dolor sit amet consectetur. Molestie lorem iaculis elit vestibulum sem. Cras sit massa est sit. Magna rhoncus ac feugiat mattis et cursus. Pellentesque pharetra aliquam nulla turpis habitasse egestas facilisis et tincidunt.`,img:"third.png"},
    {title:"lorem ipsum dolor sit amet consecuter",description:`Lorem ipsum dolor sit amet consectetur. Molestie lorem iaculis elit vestibulum sem. Cras sit massa est sit. Magna rhoncus ac feugiat mattis et cursus. Pellentesque pharetra aliquam nulla turpis habitasse egestas facilisis et tincidunt.`,img:"second.png"},
    {title:"lorem ipsum dolor sit amet consecuter",description:`Lorem ipsum dolor sit amet consectetur. Molestie lorem iaculis elit vestibulum sem. Cras sit massa est sit. Magna rhoncus ac feugiat mattis et cursus. Pellentesque pharetra aliquam nulla turpis habitasse egestas facilisis et tincidunt.`,img:"Subtract.png"},
    {title:"lorem ipsum dolor sit amet consecuter",description:`Lorem ipsum dolor sit amet consectetur. Molestie lorem iaculis elit vestibulum sem. Cras sit massa est sit. Magna rhoncus ac feugiat mattis et cursus. Pellentesque pharetra aliquam nulla turpis habitasse egestas facilisis et tincidunt.`,img:"sub2.png"},
]
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
                                    <div className={`col-md-6`} key={index}>
                                        <div className="card border-0">
                                        <img
                                            src={`/${card.img}`}
                                            className="card-img-top position-relative"
                                            alt="..."
                                        />
                                        <div className={`position-absolute ${index === 0 ? `${style.top12}` : `${style.top10}`}`}>
                                            <button className={`btn btn-primary bgPrimary wsm rounded-circle ${style.border}`}>
                                            <svg
                                                width={`${index === 0 ? "25" : 16}`}
                                                height={`${index === 0 ? "38" :28}`}
                                                viewBox="0 0 16 28"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <mask id="path-1-inside-1_272_639" fill="white">
                                                <path d="M15.715 13.364L1.84798 0.298019C1.44598 -0.078981 0.771977 -0.100981 0.339977 0.249019C-0.0910231 0.600019 -0.116023 1.19002 0.284977 1.56802L13.478 14L0.284977 26.432C-0.115023 26.81 -0.0900236 27.401 0.340976 27.751C0.545976 27.917 0.806977 28 1.06598 28C1.35198 28 1.63698 27.9 1.84798 27.702L15.715 14.636C16.095 14.277 16.095 13.723 15.715 13.364Z"/>
                                                </mask>
                                                <path
                                                d="M15.715 13.364L1.84798 0.298019C1.44598 -0.078981 0.771977 -0.100981 0.339977 0.249019C-0.0910231 0.600019 -0.116023 1.19002 0.284977 1.56802L13.478 14L0.284977 26.432C-0.115023 26.81 -0.0900236 27.401 0.340976 27.751C0.545976 27.917 0.806977 28 1.06598 28C1.35198 28 1.63698 27.9 1.84798 27.702L15.715 14.636C16.095 14.277 16.095 13.723 15.715 13.364Z"
                                                fill="white"
                                                />
                                            </svg>
                                            </button>
                                        </div>
                                        <div className="card-body px-4">
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
