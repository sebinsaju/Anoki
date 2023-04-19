import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import banner from "../../public/assets/banner-1.jpeg";
import banner_1 from "../../public/assets/banner-5.jpeg";
import banner_2 from "../../public/assets/banner-4.jpeg";
import { IoIosArrowDown } from "react-icons/io";

const BannerSlider = () => {
  const DATA = [
    { image: banner_2.src, text: "Your dream vacation starts here!" },
    { image: banner.src, text: "Discover a new level of hospitality with us." },
    { image: banner_1.src, text: "Welcome to our little piece of paradise!" },
  ];
  var settings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
  };
  return (
    <div>
      <Slider {...settings}>
        {DATA.map((slide, index) => {
          return (
            <div className="banner-slide" key={index}>
              <img src={slide.image} />
              <div className="arrow">
                <IoIosArrowDown />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default BannerSlider;
