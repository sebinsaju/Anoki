import Link from "next/link";
import React from "react";

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
                <img src="../assets/restorant.jpeg" />
              </div>
              <div className="col-6">
                <img src="../assets/cover.jpeg" />
              </div>
              <div className="col-6 pt-4">
                <img src="../assets/banner-1.jpeg" />
              </div>
              <div className="col-6 pt-4">
                <img src="../assets/banner-5.jpeg" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 image-large">
            <img src="../assets/banner-4.jpeg" />
          </div>
        </div>
        {/* <div className='link pt-4'><Link href="/gallery"><a>View gallery</a></Link></div> */}
      </div>
    </div>
  );
};

export default HomeGallery;
