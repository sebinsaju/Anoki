import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import banner from "../../public/assets/banner-1.jpeg";
import banner_1 from "../../public/assets/banner-5.jpeg";
import banner_2 from "../../public/assets/banner-4.jpeg";

const BannerSlider = () => {
  const DATA = [
    { image: banner_2.src, text: "Your dream vacation starts here!" },
    { image: banner.src, text: "Discover a new level of hospitality with us." },
    { image: banner_1.src, text: "Welcome to our little piece of paradise!" },
  ];
  var settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <Slider {...settings}>
        {DATA.map((slide, index) => {
          return (
            <div className="banner-slide" key={index}>
              {/* <div className="banner-title">
              {slide.text}
              </div> */}
              <img src={slide.image} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default BannerSlider;
