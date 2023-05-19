import React, { useState } from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import { AiOutlineInstagram,AiOutlineMail, AiOutlineFacebook } from "react-icons/ai";
import {MdOutlineAlternateEmail} from "react-icons/md";
import {FcCallback} from "react-icons/fc";
import {BsGithub} from "react-icons/bs";
import { Link } from "react-scroll";

const Footer = () => {
const setMoved =(e)=>{
  e.prevent.default();
}

  return (
    <div className="footer">
      
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <br/>

        <br/>
      <p><AiOutlineMail color="white" size={"1rem"}/><span className="email">sb9489.rs@gmail.com</span></p>
       <p><MdOutlineAlternateEmail color="" size={"1rem"} /><span className="email">sb9489.rs@outlook.com</span></p>
        <p ><FcCallback color="blue" size={"1rem"}/><span className="mb-num">8667811645</span></p>
        <p ><FcCallback color="blue" size={"1rem"}/><span className="mb-num">9865529834</span></p>
        <div className="f-icons">
          <a href="https://github.com/23121991/" target="_Blank" rel="noopener noreferrer"> 
          <BsGithub color="black" size={"3rem"} />
          </a>

          <a href="https://www.facebook.com/saravanan.t.sarvanan/" target="_Blank" rel="noopener noreferrer">
          <AiOutlineFacebook color="rgb(5,20,100)" size={"3rem"} />
          </a>
          <a href="https://www.instagram.com/saravanan_be_r/" target="_Blank" rel="noopener noreferrer">
          <AiOutlineInstagram color="red" size={"3rem"} />
          </a>
          <a href="#top" className="home-ft" >
            Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
