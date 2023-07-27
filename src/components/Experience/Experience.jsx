import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>5+</div>
        <span  style={{color: darkMode?'white':''}}>years </span>
        <span>Experience in other field</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>10+</div>
        <span  style={{color: darkMode?'white':''}}>completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>developer</div>
        <span  style={{color: darkMode?'white':''}}> I will design, develop, and maintain fully-fledged and functioning platforms with databases or servers </span>
        <span>Work</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>Job</div>
        <span  style={{color: darkMode?'white':''}}>I have deep passion for software development through years of practice,& many personel projects which honed my skills as a programmmer using technologies and coding languages. </span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;