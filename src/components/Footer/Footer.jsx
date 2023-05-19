import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import { AiOutlineMail } from "react-icons/ai";
import {MdOutlineAlternateEmail} from "react-icons/md";
import {FcCallback,FcHome} from "react-icons/fc";
import {BsGithub} from "react-icons/bs";


const Footer = () => {


  return (
    <div className="footer">
      
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <br/>

        <br/>
      <p><AiOutlineMail color="rgb(70,100,130)" size={"1rem"}/><span className="email">sb9489.rs@gmail.com</span></p>
       <p><MdOutlineAlternateEmail color="rgb(90,80,70)" size={"1rem"} /><span className="email">sb9489.rs@outlook.com</span></p>
        <p ><FcCallback color="blue" size={"1rem"}/><span className="mb-num">8667811645</span></p>
        <p ><FcCallback color="blue" size={"1rem"}/><span className="mb-num">9865529834</span></p>
        <div className="f-icons">
          <a href="https://github.com/23121991/" target="_Blank" rel="noopener noreferrer"> 
          <BsGithub color="rgb(50,60,80)" size={"3rem"} />
          </a>
          <a href="#top" className="home-ft" >
            <FcHome size={"3rem"}/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
