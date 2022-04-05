
import React from 'react'
import "./recent_works.scss"

import { useState } from "react";

// Imported Images

import library_icon from '../assets/library.png'
import education_icon from "../assets/education.png"
import Notes_icon from '../assets/notes.png'
import restaurant_icon from "../assets/restaurant.png"
import arrow_img from "../assets/arrow.png";
import restaurant_back from "../assets/restaurant_back.png";
import library_back from "../assets/library_back.png";
import notes_back from "../assets/notes_back.png";
import education_back from "../assets/education_back.jpeg"



export const Recent_Works = () => {


  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [


    {
      id: "1",
      icon: `${library_icon}`,
      title: "Library Management System",
      desc:
        "Librarian can issue book with date,time,book and user details and can check  book issued data,. He can delete any issues book.",

      project_link: "https://akram3598786.github.io/Book-Library-Web-Application/",
      code_link: "https://github.com/akram3598786/Book-Library-Web-Application",
      img: `${library_back}`,
    },
    {
      id: "2",
      icon: `${restaurant_icon}`,
      title: "Restaurant Website",

      project_link: "https://akram3598786.github.io/Restraurant-responsive-website/solution-starter/index.html",
      code_link: "https://github.com/akram3598786/Restraurant-responsive-website",
      desc:
        "It's just interface website for a restaurant. User can check available meal and price. Also can check locations and service area.",
      img: `${restaurant_back}`,

    },
    {
      id: "3",
      icon: `${education_icon}`,
      title: "Education Website",

      project_link: "https://akram3598786.github.io/coding-for-juniors/Coding%20for%20juniors%20official/index.html#carouselExampleCaptions",
      code_link: "https://github.com/akram3598786/coding-for-juniors",
      desc:
        "It's a education website for providing a interface to aspiring school students for programming.",
      img: `${education_back}`,
    },
    {
      id: "4",
      icon: `${Notes_icon}`,
      title: "Note Application",

      project_link: "https://akram3598786.github.io/Note-Application/Notes%20web%20application/",
      code_link: "https://github.com/akram3598786/Note-Application",
      desc:
        "User can use this web application for taking notes at different instant of Times. Can delete and can search the note by search bar. ",
      img: `${notes_back}`,
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };


  return (

    <>
      <div className="works_heading text-center mt-3 mb-3"> <h5 > Recent Woks</h5></div>
      <div className="recent_works" id="recent_works">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentSlide * 80}vw)` }}>
          {data.map((d, i) => (
            <div className="container" data-aos="flip-left">
              <div className="item mb-4">
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <img src={d.icon} alt="loding" />
                    </div>
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                    <div className="project_links">
                      <a href={d.project_link} rel="noreferrer" target="_blank"> <span className="mb-3">See Project</span></a>
                      <a href={d.code_link} rel="noreferrer" target="_blank"> <span className=" second mb-3">See Code</span></a>

                    </div>
                  </div>
                </div>
                <div className="right">
                  <img src={d.img} alt="" />
                </div>
              </div>
            </div>
          ))}

        </div>
        <img
          src={arrow_img}
          className="arrow left"
          alt=""
          onClick={() => handleClick("left")}
        />
        <img
          src={arrow_img}
          className="arrow right"
          alt=""
          onClick={() => handleClick()}
        />
      </div>
    </>
  );

}

export default Recent_Works;
