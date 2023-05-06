import Link from "next/link";
import React from "react";
import image1 from "../../public/assets/restorant.jpeg"
import image2 from "../../public/assets/cover.jpeg"
import image3 from "../../public/assets/banner-1.jpeg"
import image4 from "../../public/assets/banner-5.jpeg"
import image5 from "../../public/assets/banner-4.jpeg"

const HomeGallery = () => {
  return (
    <div className="home-gallery">
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <h3 className="title-big pb-4">
            Through the Lens
            </h3>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="row">
              <div className="col-6">
                <img src={image1.src} />
              </div>
              <div className="col-6">
                <img src={image2.src} />
              </div>
              <div className="col-6 pt-4">
                <img src={image3.src} />
              </div>
              <div className="col-6 pt-4">
                <img src={image4.src} />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 image-large">
            <img src={image5.src} />
          </div>
        </div>
        {/* <div className='link pt-4'><Link href="/gallery"><a>View gallery</a></Link></div> */}
      </div>
    </div>
  );
};

export default HomeGallery;
