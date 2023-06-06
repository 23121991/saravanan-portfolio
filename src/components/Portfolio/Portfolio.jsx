import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Quotes from "../../img/quotes.png";
import todolist from "../../img/todolist.png";
import MernChat from "../../assets/mernchat.png";
import gmailclone from "../../assets/gmail_clone.png";
import CRUD from "../../assets/cruduser.png";
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
              target="_Blank" rel="noopener noreferrer"
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
              target="_Blank" rel="noopener noreferrer"
            >
              Frontend source code
            </a>
            <br />
            <a
              href="https://github.com/23121991/Mernchat-app-backend"
              className="source-code"
              smooth={true}
              spy={true}
              target="_Blank" rel="noopener noreferrer"
            >
              Backend source code
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://main--euphonious-yeot-5713ac.netlify.app/"
              smooth={true}
              spy={true}
              target="_Blank" rel="noopener noreferrer"
            >
              <img
                src={CRUD}
                alt=""
                rel="noopener noreferrer"
                target="_Blank"
              />
              <p className="prj-title">CRUD-Operation</p>
              <p className="prj-desc">
                Using FrontEnd Reactjs, BackEnd Nodejs &
                MongoDb
              </p>
            </a>
            <a
              href="https://github.com/23121991/usercrud-fnd"
              className="source-code"
              smooth={true}
              spy={true}
              target="_Blank" rel="noopener noreferrer"
            >
              Frontend source code
            </a>
            <br />
            <a
              href="https://github.com/23121991/usercrud-backend"
              className="source-code"
              smooth={true}
              spy={true}
              target="_Blank" rel="noopener noreferrer"
            >
              Backend source code
            </a>
            
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://reliable-medovik-bb2dd4.netlify.app/"
              smooth={true}
              spy={true}
              target="_Blank" rel="noopener noreferrer"
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
              target="_Blank" rel="noopener noreferrer"
            >
              Frontend source code
            </a>
            <br />
            <a
              href="https://github.com/23121991/quotesapp-backend"
              className="source-code"
              smooth={true}
              spy={true}
              target="_Blank" rel="noopener noreferrer"
            >
              Backend source code
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://papaya-moonbeam-cd5f86.netlify.app/"
              smooth={true}
              spy={true}
              target="_Blank" rel="noopener noreferrer"
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
              target="_Blank" rel="noopener noreferrer"
            >
              Frontend source code
            </a>
            <br />
            <a
              href="https://github.com/23121991/todolist-backend"
              className="source-code"
              smooth={true}
              spy={true}
              target="_Blank" rel="noopener noreferrer"
            >
              Backend source code
            </a>
          </SwiperSlide>
          <br/>
          <SwiperSlide>
            <a
              href="https://regal-liger-dce38b.netlify.app/"
              smooth={true}
              spy={true}
              target="_Blank" rel="noopener noreferrer"
            >
              <img
                src={gmailclone}
                alt=""
                rel="noopener noreferrer"
                target="_Blank"
              />
              <p className="prj-title">Gmail-Clone-Ui</p>
              <p className="prj-desc">
                Using FrontEnd Reactjs, BackEnd Nodejs &
                MongoDb(with-Authentication)
              </p>
            </a>
            <a
              href="https://github.com/23121991/Gmailclone1"
              className="source-code"
              smooth={true}
              spy={true}
              target="_Blank" rel="noopener noreferrer"
            >
              Frontend source code
            </a>
            <br />
            <a
              href="https://github.com/23121991/gmailback"
              className="source-code"
              smooth={true}
              spy={true}
              target="_Blank" rel="noopener noreferrer"
            >
              Backend source code
            </a>
            
          </SwiperSlide>
         
        </Swiper>
      </>
    </div>
  );
};

export default Portfolio;
