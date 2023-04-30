import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {AiOutlineClose} from "react-icons/ai"


const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);
  const router = useRouter();
  const updateScreen = () => {
    if (window.scrollY < 600) {
      setIsTransparent(true);
    } else {
      setIsTransparent(false);
    }
  };

  useEffect(() => {
    if (router.route == "/") {
      setIsTransparent(true);
    }
  }, []);
  if (typeof window != "undefined") {
    window.addEventListener("scroll", updateScreen);
  }
  const toggler = () => {
    setToggle(!toggle);
  };
  return (
    <header className={`w3l-header-nav ${isTransparent ? "transparent" : ""}`}>
      <nav className="navbar navbar-expand-lg navbar-light fill px-lg-0 py-0 px-3">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">
              <img src="/logo.png" alt="Your logo" style={{ height: "55px" }} />
            </a>
          </Link>

          {!toggle && <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggler}
          >
            <span className="navbar-toggler-icon"></span>
          </button>}
          {toggle &&<button onClick={toggler} className="close_btn">
            <AiOutlineClose />
            </button>}
          {toggle && (
            <div className="mobile-menu">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link" onClick={toggler}>
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/book-now">
                    <a className="nav-link" onClick={toggler}>
                      Book Now
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact">
                    <a className="nav-link" onClick={toggler}>
                      Contact Us
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/gallery">
                    <a className="nav-link" onClick={toggler}>
                      Gallery
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          )}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/book-now">
                  <a className="nav-link">Book Now</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact">
                  <a className="nav-link">Contact Us</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/gallery">
                  <a className="nav-link">Gallery</a>
                </Link>
              </li>
            </ul>
            {/* <a href="#booking" className="ml-3 book btn btn-secondary btn-style">Book Now</a> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
