import React from "react";
import Link from "next/dist/client/link";
// import image1 from "../../public/assets/4ef1db8e-aecd-40ed-84f2-0b4c2c931361.jpeg";
// import image2 from "../../public/assets/7a6d5beb-e1d2-4a2b-a428-0837ffd2aff5.jpeg";
// import image3 from "../../public/assets/banner-1.jpeg";
// import image4 from "../../public/assets/banner-2.jpeg";
// import image5 from "../../public/assets/banner-3.jpeg";
// import image6 from "../../public/assets/banner-4.jpeg";
// import image7 from "../../public/assets/banner-5.jpeg";
// import image8 from "../../public/assets/banner-6.jpeg";
// import image9 from "../../public/assets/banner-7.jpeg";
// import image10 from "../../public/assets/bb7f4093-d699-475b-a101-7221c001811f.jpeg";
// import image11 from "../../public/assets/cover.jpeg";
// import image12 from "../../public/assets/kitchen.jpeg";
// import image13 from "../../public/assets/resort-background.jpeg";
// import image14 from  "../../public/assets/resort-long-view.jpeg";
// import image15 from "../../public/assets/resort.jpeg";
// import image16 from "../../public/assets/restorant.jpeg";
// import image17 from "../../public/assets/WhatsApp Image 2023-04-01 at 9.29.53 AM (1).jpeg";
// import image18 from "../../public/assets/WhatsApp Image 2023-04-01 at 9.29.53 AM.jpeg";

const Gallery = () => {
  // const IMAGES = [
  //   { image: image1.src },
  //   { image: image2.src },
  //   { image: image3.src },
  //   { image:  image4.src},
  //   { image: image5.src },
  //   { image: image6.src },
  //   { image: image7.src },
  //   { image:  image8.src},
  //   { image:  image9.src},
  //   { image: image10.src },
  //   { image:  image11.src},
  //   { image: image12.src },
  //   { image: image13.src },
  //   { image:image14.src },
  //   { image:  image15.src},
  //   { image:  image16.src},
  //   { image:  image17.src},
  //   { image: image18.src },  
  // ];
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
              {/* {IMAGES.map((image, index) => {
                return (
                  <div
                    className="three-grids-columns col-lg-4 col-md-6 mb-4"
                    key={index}
                  >
                    <img src={image.image} alt="" className="img-fluid" />
                  </div>
                );
              })} */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
