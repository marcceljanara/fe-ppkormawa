import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">XSmartAgriChain</div>
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Services
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              {/* <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link> */}
            </li>
            <li>
              {/* <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link> */}
            </li>
          </ul>
        </div>
        <a href="https://wa.me/6285267759304?text=Halo,%20saya%20tertarik%20untuk%20mendapatkan%20informasi%20lebih%20lanjut" 
   target="_blank" 
   rel="noopener noreferrer">
  <button className="button n-button">Contact</button>
</a>
      </div>
    </div>
  );
};

export default navbar;
