import React from "react";
import { bookingLink } from "../../constants";
import background from "../../public/assets/resort-background.jpeg";
import long from "../../public/assets/resort-long-view.jpeg";
import resort from "../../public/assets/resort.jpeg";
import kitchen from "../../public/assets/kitchen.jpeg";
import image from "../../public/assets/banner-5.jpeg"
const BestRooms = () => {
  return (
    <div className="best-rooms py-5">
      <div className="container py-lg-5 py-sm-4">
        <h3 className="title-big text-center">Premier cottages</h3>
        <div className="ban-content-inf row py-lg-3">
          <div className="maghny-gd-1 col-lg-6">
            <div className="maghny-grid">
              <figure className="effect-lily">
                <img className="img-fluid" src={image.src} alt="image" />
                <figcaption className="w3set-hny">
                  <div>
                    <h4 className="top-text">Spacious</h4>
                    {/* <p>From 20$ </p> */}
                  </div>
                </figcaption>
              </figure>
              <div className="room-info">
                <h3 className="room-title">
                  <a href="room-single.html">Elite cottages</a>
                </h3>
                <ul className="mb-3">
                  <li>
                    <span className="fa fa-users"></span>Single Cottage:{" "}
                    <span>1 Nos</span>
                  </li>
                  <li>
                    <span className="fa fa-bed"></span> Double Cottage:{" "}
                    <span>4 Nos</span>
                  </li>
                  <li>
                    <span className="fa fa-bed"></span> AC
                  </li>
                </ul>
                <p>
                  Experience the natural beauty of Vagamon from the comfort and
                  privacy of our well-appointed cottages.
                </p>
                <a
                  href={bookingLink}
                  className="btn btn-style btn-primary mt-sm-4 mt-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
          <div className="maghny-gd-1 col-lg-6 mt-lg-0 mt-4">
            <div className="row">
              <div className="maghny-gd-1 col-6">
                <div className="maghny-grid">
                  <figure className="effect-lily border-radius">
                    <img className="img-fluid" src={long.src} alt="" />
                    <figcaption>
                      <div>
                        <h4>Private</h4>
                        {/* <p>From 20$ </p> */}
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="maghny-gd-1 col-6">
                <div className="maghny-grid">
                  <figure className="effect-lily border-radius">
                    <img className="img-fluid" src={background.src} alt="" />
                    <figcaption>
                      <div>
                        <h4>Modern</h4>
                        {/* <p>From 20$ </p> */}
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="maghny-gd-1 col-6 mt-4">
                <div className="maghny-grid">
                  <figure className="effect-lily border-radius">
                    <img className="img-fluid" src={resort.src} alt="" />
                    <figcaption>
                      <div>
                        <h4>Scenic</h4>
                        {/* <p>From 20$ </p> */}
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="maghny-gd-1 col-6 mt-4">
                <div className="maghny-grid">
                  <figure className="effect-lily border-radius">
                    <img className="img-fluid" src={kitchen.src} alt="" />
                    <figcaption>
                      <div>
                        <h4>Tranquil</h4>
                        {/* <p>From 20$ </p> */}
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestRooms;
