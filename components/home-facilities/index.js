import React from "react";
import Slider from "react-slick";
import banner1 from "../../public/assets/banner-1.jpeg"
import banner2 from "../../public/assets/banner-2.jpeg"
import banner3 from "../../public/assets/banner-3.jpeg"
import banner4 from "../../public/assets/banner-4.jpeg"
import banner5 from "../../public/assets/banner-5.jpeg"
import banner6 from "../../public/assets/banner-6.jpeg"
import banner7 from "../../public/assets/banner-7.jpeg"
const HomeFacilities = () => {
  const DATA = [
    { image: banner1.src },
    { image: banner2.src },
    { image: banner3.src },
    { image: banner4.src },
    { image: banner5.src },
    { image: banner6.src },
    { image: banner7.src },
  ];

  const FEATURES = [
    "Individual car parking",
    "Sitout",
    "Children play area",
    "Campfire",
    "Solar water heater",
    "Restaurant",
    "BBQ",
    "32” tv with set top box",
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
    <div className="facility-wrapper">
      <div className="container py-lg-5 py-sm-4">
        <div className="row">
          <div className="col-md-6 col-sm-12 py-5">
            <h3 className="title-big">
              Experience Tranquility in Nature&apos;s Lap
            </h3>
            <p>
              Welcome to Anoki Resorts, where nature meets luxury. Located amidst
              the serene hills of Vagamon, our resort offers the perfect getaway
              for those seeking a peaceful escape from the hustle and bustle of
              city life. Immerse yourself in the tranquility of nature and
              indulge in top-notch amenities, exceptional service, and
              comfortable accommodation. Whether you&apos;re looking for a
              family vacation, a romantic getaway, or an adventure-packed trip,
              Anoki Resorts has something for everyone. Book your stay with us
              today and experience the best of Vagamon!
            </p>
            <ul style={{color:"#888",paddingLeft:"20px"}}>
              <div className="row mt-3">
                {FEATURES.map((feature, index) => {
                  return (
                    <div className="col-6 mb-2" key={index}>
                      <li>{feature}</li>
                    </div>
                  );
                })}
              </div>
            </ul>
          </div>
          <div className="col-md-6 col-sm-12 py-5">
            <div className="facility-slider">
              <Slider {...settings}>
                {DATA.map((slide, index) => {
                  return (
                    <div className="facility-slide" key={index}>
                      <img src={slide.image} />
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFacilities;
