import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../imgs/ppk_ormawa.png";
import Fiverr from "../../imgs/Kemendikbud.png";
import Amazon from "../../imgs/logo_ppkkompa.jpg";
import Shopify from "../../imgs/unila.png";
import Facebook from "../../imgs/handayani.png";
// import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: "" }}>
  Mendukung Semua Kegiatan
</span>
<span>PPK Ormawa & Masyarakat</span>
<spane>
  PPK Ormawa adalah program pengabdian masyarakat yang melibatkan mahasiswa<br />
  dalam kegiatan sosial untuk meningkatkan kesejahteraan. <br />
  Mahasiswa berperan aktif dalam berbagai proyek inovatif, <br />
  berkontribusi nyata untuk pengembangan komunitas, <br />
  dan meningkatkan kapasitas organisasi kemahasiswaan.
</spane>

          {/* <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link> */}
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
