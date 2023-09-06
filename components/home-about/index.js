import React from "react";
import Link from "next/dist/client/link";
import banner from "../../public/assets/banner-1.jpeg"
import banner2 from "../../public/assets/banner-3.jpeg"
const HomeAbout = () => {
  return (
    <section className="w3l-about py-5">
      <div className="container py-sm-4">
        <div className="row">
          <div className="col-lg-6 about-left mb-md-0 mb-5">
            <h3 className="title-big">Welcome To Anoki Resorts in Vagamon</h3>
            <h5>We make the best for all our customers.</h5>
            <p className="mt-3">
              Nestled in the lush green hills of Vagamon - also known as the
              Scotland of India - our resort offers an idyllic retreat for those
              seeking a serene getaway. Surrounded by verdant valleys and misty
              mountains, our resort is the perfect escape from the hustle and
              bustle of city life.
            </p>
            <p>
              Our resort boasts luxurious rooms and suites, each tastefully
              designed to provide the utmost comfort and relaxation. From the
              moment you arrive, our friendly and attentive staff will ensure
              that your every need is taken care of.
            </p>
            <Link href="/">
              <a className="btn btn-style btn-primary mt-sm-5 mt-4">
                Learn About Us
              </a>
            </Link>
          </div>
          <div className="col-lg-6 about-right position-relative mt-lg-0 mt-5">
            <img
              src={banner.src}
              alt=""
              className="img-fluid img-border mt-4"
            />
            <img
              src={banner2.src}
              alt=""
              className="img-fluid position-absolute img-position"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
