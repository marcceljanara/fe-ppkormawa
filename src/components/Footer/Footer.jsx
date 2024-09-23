import React from "react";
import "./Footer.css";
import Wave from "../../imgs/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Youtube from "@iconscout/react-unicons/icons/uil-youtube";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import UilYoutube from "@iconscout/react-unicons/icons/uil-youtube";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Tim Pelaksana Ormawa Universitas Lampung</span>
        <div className="f-icons">
        <a href="https://www.instagram.com/ppkormawa.kopmaunila?igsh=MTZmajgzbW5pc2I4YQ==" target="_blank" rel="noopener noreferrer">
          <Insta color="white" size={"3rem"} />
  </a>
  <a href="https://www.youtube.com/@ppkormawakopmaunila" target="_blank" rel="noopener noreferrer">
          <UilYoutube color="white" size={"3rem"} />
  </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
