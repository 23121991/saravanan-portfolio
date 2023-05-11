import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
// import { FontAwesomeIcon } from '@fortawesome/fa-facebook';
// import { AiFillFacebook } from "react-icons/ai";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <br/>
        <span>sb9489.rs@gmail.com</span>
        <span>sb9489.rs@outlook.com</span>
        <p className="ft-num">Mobile No:<span className="mb-num">8667811645</span></p>
        <div className="f-icons">
          <Link to="https://github.com/23121991"> 
          <Gitub color="grey" size={"3rem"}/>
          </Link>
          <Insta color="red" size={"3rem"} />
          {/* <AiFillFacebook color="blue" size={"3rem"} Link to="https://github.com/23121991"/> */}
          <Gitub color="grey" size={"3rem"}/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
