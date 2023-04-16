import React from "react";
import Link from "next/dist/client/link";
const Gallery = () => {
  const IMAGES = [
    { image: "/assets/4ef1db8e-aecd-40ed-84f2-0b4c2c931361.jpeg" },
    { image: "/assets/7a6d5beb-e1d2-4a2b-a428-0837ffd2aff5.jpeg" },
    { image: "/assets/banner-1.jpeg" },
    { image: "/assets/banner-2.jpeg" },
    { image: "/assets/banner-3.jpeg" },
    { image: "/assets/banner-4.jpeg" },
    { image: "/assets/banner-5.jpeg" },
    { image: "/assets/banner-6.jpeg" },
    { image: "/assets/banner-7.jpeg" },
    { image: "/assets/bb7f4093-d699-475b-a101-7221c001811f.jpeg" },
    { image: "/assets/cover.jpeg" },
    { image: "/assets/kitchen.jpeg" },
    { image: "/assets/resort-background.jpeg" },
    { image: "/assets/resort-long-view.jpeg" },
    { image: "/assets/resort.jpeg" },
    { image: "/assets/restorant.jpeg" },
    { image: "/assets/WhatsApp Image 2023-04-01 at 9.29.53 AM (1).jpeg" },
    { image: "/assets/WhatsApp Image 2023-04-01 at 9.29.53 AM.jpeg" },  
  ];
  return (
    <div>
      <section className="w3l-breadcrumb">
        <div className="breadcrum-bg py-sm-5 py-4">
          <div className="container py-lg-3">
            <h2>Gallery</h2>
            <p>
              <Link href="/">
                <a>Home</a>
              </Link>{" "}
              &nbsp; / &nbsp; Gallery
            </p>
          </div>
        </div>
      </section>

      <section className="w3l-feature-2">
        <div className="grid top-bottom ">
          <div className="container py-md-5">
            {/* <h3 className="title-big text-center">Rooms and Cottages at Radiant Resort near Bangalore
                        </h3> */}
            <div className="middle-section row mt-lg-5 pt-md-3">
              {IMAGES.map((image, index) => {
                return (
                  <div
                    className="three-grids-columns col-lg-4 col-md-6 mb-4"
                    key={index}
                  >
                    <img src={image.image} alt="" className="img-fluid" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
