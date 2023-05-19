import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/boy.png";
import profilePic2 from "../../assets/zomato.png";
import profilePic3 from "../../assets/management.png";
import profilePic4 from "../../assets/thirukural.png";
import profilePic5 from "../../assets/gmail_clone.png";
import profilePic6 from "../../img/boy3.jpg";
import { AiOutlineArrowDown } from "react-icons/ai";

const Testimonial = () => {
  const clients = [
   
    {
      img: profilePic1,
      review:
        "!...Click the * And Swipe",
    },
    {
      img: profilePic6,
      review:
        "SKILLS I have Html,Javascript,Css,Reactjs,Nodejs,React-Redux,MySql & MongoDb",
    },
    {
      img: profilePic2,
      
      review : "Zomato-App FrontEnd Using ReactJs",
      // githublink: URL("https://github.com/23121991/zomato-search-filter-app"),
    },
    {
      img: profilePic3,
      review:
        "CRUD Application Using  ReactJs",
    },
    {
      img: profilePic4,
      review:
        "Thirukural Search App Using Html,Javascript & Css",
    },
    {
      img: profilePic5,
      review:
        "gmail clone Using Reactjs,Nodejs & MongoDb",
    },


  ];





  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Exceptional Work </span>
        <span>& Projects</span>
        
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <br/>
                <span className="prj-rev">{client.review}</span>
                <br/>
                <p className="github">Github Source-code</p>
                <a href="https://github.com/23121991?tab=repositories" className="git-desc" target="_Blank" rel="noopener noreferrer">
          All My Project Repositeries ...Click here..!
        </a>
        <br/>
        <p className="netlify">Netlify Deploys</p>
        <a href="https://app.netlify.com/teams/23121991/sites" className="net-desc" target="_Blank" rel="noopener noreferrer" >
          All My Project Deploys ...Click here..!
        </a>
        <p className="prj-rev">Click
        <AiOutlineArrowDown/></p>
        </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;