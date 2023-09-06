import React from "react";
import Link from "next/dist/client/link";
import { bookingLink } from "../../constants";
const Quotation = () => {
  return (
    <div className="quotation py-5">
      <div className="container py-xl-5 py-lg-3">
        <div className="welcome-left text-center py-md-5 py-3">
          <h3>Discover Vagamon&apos;s hidden gem at our resort</h3>
          <Link href={bookingLink}>
            <a
              className="btn btn-style transparent-btn mt-sm-5 mt-4 mr-2 text-white"
              target="_blank"
              rel="noreferrer"
            >
              Book Now
            </a>
          </Link>
          <Link href="/contact">
            <a className="btn btn-style btn-primary mt-sm-5 mt-4 text-white">
              Contact Us
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Quotation;
