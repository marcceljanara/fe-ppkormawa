import React from "react";
import "./Intro.css";
import Vector1 from "../../imgs/slime.png";
import Vector2 from "../../imgs/Vector2.png";
import boy from "../../imgs/rover2.png";
// import glassesimoji from "../../imgs/buah.png";
import thumbup from "../../imgs/thumbup.png";
import crown from "../../imgs/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Youtube from "../../imgs/youtube.png";
import LinkedIn from "../../imgs/linkedin.png";
import Instagram from "../../imgs/instagram.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Ganti impor Link

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          <span style={{ color:  "" }}>Smart Agriculture </span>
          <span>with Drone-Rover</span>
          <span>
          Pengembangan Progressive Web App dan Drone Rover untuk 
          Pertanian Presisi di Desa Air Kubang Berdasarkan Dataset Perangkat IoT Berbasis Blockchain dari Univeritas Lampung
          </span>
        </div>
        <Link to="/dashboard" className="i-button" style={{ textDecoration: 'none' }}>
  <button className="button">Dashboard</button>
</Link>

        {/* social icons */}
        <div className="i-icons">

        <a href="https://www.youtube.com/@ppkormawakopmaunila" target="_blank" rel="noopener noreferrer">
    <img src={Youtube} alt="Youtube" />
  </a>
            <a href="https://www.instagram.com/ppkormawa.kopmaunila?igsh=MTZmajgzbW5pc2I4YQ==" target="_blank" rel="noopener noreferrer">
    <img src={Instagram} alt="Instagram" />
  </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        /> */}
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Tanaman" text2="Monitoring" />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={thumbup} text1="Best Monitoring" text2="System" />
        </motion.div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
