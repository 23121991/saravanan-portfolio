import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Quotes from "../../img/quotes.png";
import todolist from "../../img/todolist.png";
import roombook from "../../assets/roombookapp.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <br/>
      <span>Projects</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Quotes} alt="" />
          
          <Link to="https://papaya-moonbeam-cd5f86.netlify.app/" smooth={true} spy={true}>
            <p>QuotesApp</p>
          </Link>
    

        </SwiperSlide>
        <SwiperSlide>
          <img src={todolist} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={roombook} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;