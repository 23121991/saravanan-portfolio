import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Quotes from "../../img/quotes.png";
import todolist from "../../img/todolist.png";
import roombook from "../../assets/roombookapp.png";
import MernChat from "../../assets/mernchat.png";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <br />
      <span>Projects</span>

      {/* slider */}
      <>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          className="portfolio-slider"
        >
          <SwiperSlide>
            <a
              href="https://astounding-cucurucho-d1fc19.netlify.app/"
              smooth={true}
              spy={true}
            >
              <img src={MernChat} alt="" />
              <p className="prj-title">MernChat-App</p>
              <p className="prj-desc">
                Using FrontEnd Reactjs,Socket-io BackEnd Nodejs & MongoDb
              </p>
            </a>
            <a
              href="https://github.com/23121991/Mernchatapp-fnd"
              className="source-code"
              smooth={true}
              spy={true}
            >
              Frontend source code
            </a>
            <br />
            <a
              href="https://github.com/23121991/Mernchat-app-backend"
              className="source-code"
              smooth={true}
              spy={true}
            >
              Backend source code
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://reliable-medovik-bb2dd4.netlify.app/"
              smooth={true}
              spy={true}
            >
              <img
                src={Quotes}
                alt=""
                rel="noopener noreferrer"
                target="_Blank"
              />
              <p className="prj-title">QuotesApp</p>
              <p className="prj-desc">
                Using FrontEnd Reactjs, BackEnd Nodejs & MongoDb
              </p>
            </a>
            <a
              href="https://github.com/23121991/quotesapp-frontend"
              className="source-code"
              smooth={true}
              spy={true}
            >
              Frontend source code
            </a>
            <br />
            <a
              href="https://github.com/23121991/quotesapp-backend"
              className="source-code"
              smooth={true}
              spy={true}
            >
              Backend source code
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://papaya-moonbeam-cd5f86.netlify.app/"
              smooth={true}
              spy={true}
            >
              <img
                src={todolist}
                alt=""
                rel="noopener noreferrer"
                target="_Blank"
              />
              <p className="prj-title">TodoListApp</p>
              <p className="prj-desc">
                Using FrontEnd Reactjs, BackEnd Nodejs & MongoDb
              </p>
            </a>
            <a
              href="https://github.com/23121991/todolist-frontendvs"
              className="source-code"
              smooth={true}
              spy={true}
            >
              Frontend source code
            </a>
            <br />
            <a
              href="https://github.com/23121991/todolist-backend"
              className="source-code"
              smooth={true}
              spy={true}
            >
              Backend source code
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://heartfelt-centaur-0f1a96.netlify.app/"
              smooth={true}
              spy={true}
            >
              <img
                src={roombook}
                alt=""
                rel="noopener noreferrer"
                target="_Blank"
              />
              <p className="prj-title">Room-Booking-App</p>
              <p className="prj-desc">
                Using FrontEnd Reactjs, BackEnd Nodejs &
                MongoDb(Jwt,ContextApi,Cookies)
              </p>
            </a>
            <a
              href="https://github.com/23121991/Room-BookingAPP-fnd"
              className="source-code"
              smooth={true}
              spy={true}
            >
              Frontend source code
            </a>
            <br />
            <a
              href="https://github.com/23121991/Room-BookingAPP-api"
              className="source-code"
              smooth={true}
              spy={true}
            >
              Backend source code
            </a>
          </SwiperSlide>
        </Swiper>
        {/* <div>
      <SwiperSlide>
        <a href="shttps://astounding-moonbeam-859654.netlify.app//" smooth={true} spy={true}>
          <img src={roombook} alt="" />
          <p>Simple Api Search-App</p>
          <p>Using Html, Javascript & Css</p>
          </a>
        </SwiperSlide>
        </div> */}
      </>
    </div>
  );
};

export default Portfolio;
