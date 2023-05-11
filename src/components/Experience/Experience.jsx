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
        <span  style={{color: darkMode?'white':''}}>I am just a beginner in full stack developer </span>
        <span>Work</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>developer</div>
        <span  style={{color: darkMode?'white':''}}>I have placed my career to reputed IT company</span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;