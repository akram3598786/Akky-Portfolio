
import React, { useEffect } from 'react';
import "./intro.scss";
import aos from "aos"
import "aos/dist/aos.css"
import arrow_img from "../assets/arrow.png";
import resume from "../assets/resume.pdf";
import profile from "../assets/profile.png"


export default function Intro() {

    useEffect(() => {
        aos.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in',
            startEvent: "infinite"

        });

    }, []);

    return (

        <>

            <div className="intro" id="intro">
                <div className="left">
                    <div className="profile">

                        {/* <img src="https://png2.cleanpng.com/sh/00467606b3fc12d3d68fc600fc31d81c/L0KzQYi4UsE3N2JqTJGAYUO4QIXpVPI5PZM8TZCANEezQ4KCUME2OWQ5SqY5NUK6RYa4TwBvbz==/5a3504b4b85b75.5470319015134240527551.png" alt="Profile loading" /> */}
                        {/* <img src="https://png2.cleanpng.com/sh/524ad013383196ca6229e90cf61def87/L0KzQYm3U8I1N6Vpj5H0aYP2gLBuTfJ2e5pzfeV8cHX1g7F1TgN1d5RwReJxb4Tyd8PokPh6NZR0iuJ4cnH3ebF1TfJ2e5pzfeV8bXHxPYbogsVlP5I9etU7OEm6PoG7WMc4OmU9Sac7MUi5Roe9VMc4OGgziNDw/kisspng-businessperson-stock-photography-corporation-businessman-5ab5d7a8bc2897.0487724815218666647707.png" alt="Profile loading" /> */}
                        <img src={profile} alt="Profile loading" />

                    </div>

                </div>



                <div className="right">
                    <div className="btn_section">
                        <a type="button" href="#contacts" class="btn btn-warning">Hire Me</a>
                        <a className="btn btn-warning" href={resume} download ><i class="fa fa-download mr-1"></i>Resume </a>

                    </div>
                    <div className="wrapper">
                        <div className="text_contents">
                            <h3>HI There, I am</h3>
                            <h2 >Akram</h2>
                            <h3> <span className="tagline">Front End Developer</span></h3>
                            <h6>MERN Stack Aspirant</h6>
                        </div>

                        <div className="arrow_img">
                            <a href="#about">
                                <img src={arrow_img} alt="png loding" />
                            </a>
                        </div>


                    </div>
                </div>
            </div>

        </>

    )
}
