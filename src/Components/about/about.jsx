
 import React, {useEffect} from 'react'
 import Aos from "aos"
 import "aos/dist/aos.css"
 import "./about.scss"


export const About = () => {
  

      useEffect(() => {
      Aos.init({
         offset: 200,
        duration: 600,
        easing: 'ease-in',
        startEvent: "load"

      });
    
  }, []);

    return (

      <>
      
    
 <div class="section about" id="about">
  <div class="container">
    <div class="card" data-aos="fade-up" data-aos-offset="10">
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <div class="card-body">
            <div class="h5 mt-0 title text-center">About</div>
            <hr />
            <p> Hello! I am Akram. Front-End developer, Enthusiatic to MERN Stack.</p>
            <p> I am final year student of B.tech from Compueter Science Engineering branch from <a href="http://mecw.com" target="_blank">Mewat Engineering college affiliated to MDU, Rohtak. </a>  I love to Coding and make projects that can resolve society issues.</p>
            <h5 className="mt-0 title text-center">Career Ojective</h5>
            <p>esciunt ipsa rem voluptatem! Fugiat, perferendis unde consequatur, nemo modi nostrum eveniet repudiandae vitae nihil magnam sed quam, possimus praesentium iusto. Ex iusto veritatis sequi iure dolore minus neque inventore accusamus beatae aut</p>
          </div>
        </div>

       
        <div class="col-lg-6 col-md-12" data-aos="fade-up" data-aos-offset="10">
          <div class="card-body">
            <div class="h5 mt-0 title text-center">Basic Information</div>
            <hr />
            <div class="row">
              <div class="col-sm-4"><strong class="text-uppercase">Age:</strong></div>
              <div class="col-sm-8">21</div>
            </div>
            <div class="row mt-3">
              <div class="col-sm-4"><strong class="text-uppercase">Email:</strong></div>
              <div class="col-sm-8">developerakky@gmail.com</div>
            </div>
            <div class="row mt-3">
              <div class="col-sm-4"><strong class="text-uppercase">Phone:</strong></div>
              <div class="col-sm-8">+91 9315220549</div>
            </div>
            <div class="row mt-3">
              <div class="col-sm-4"><strong class="text-uppercase">Address:</strong></div>
              <div class="col-sm-8">Ajnara Le Garden, Noida Extension </div>
            </div>
            <div class="row mt-3">
              <div class="col-sm-4"><strong class="text-uppercase">Languages:</strong></div>
              <div class="col-sm-8">English, Hindi,Urdu</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>


    {/* Skiils HTML */}

<div class="section" id="skill">
  <div class="container">
    <div class="h5 text-center mb-4 title">Languages/Skills</div>
    <div class="card" data-aos="fade-up" data-aos-offset="10" data-aos-anchor-placement="top-bottom">
      <div class="card-body">
        <div class="row">

          <div class="col-md-6">
            <div class="progress-container progress-primary"><span class="progress-badge">C</span>
              <div class="progress">
                <div class="progress-bar progress-bar-striped " data-aos="slide-right" data-aos-offset="100" data-aos-duration="800" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}><span class="progress-value_c" >75%</span></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="progress-container progress-primary"><span class="progress-badge">HTML</span>
              <div class="progress">
                <div class="progress-bar progress-bar-striped " data-aos="slide-right"data-aos-offset="10" data-aos-duration="800" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}><span class="progress-value_html">90%</span></div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="progress-container progress-primary"><span class="progress-badge">CSS</span>
              <div class="progress">
                <div class="progress-bar progress-bar-striped " data-aos="slide-right" data-aos-offset="10" data-aos-duration="800" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}><span class="progress-value_css" >80%</span></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="progress-container progress-primary"><span class="progress-badge">JavaScript</span>
              <div class="progress">
                <div class="progress-bar progress-bar-striped " data-aos="slide-right" data-aos-offset="10" data-aos-duration="800" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "78%"}}><span class="progress-value_js">78%</span></div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="progress-container progress-primary"><span class="progress-badge">Git</span>
              <div class="progress">
                <div class="progress-bar progress-bar-striped " data-aos="slide-right" data-aos-offset="10" data-aos-duration="800" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "65%"}}><span class="progress-value_git" >65%</span></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="progress-container progress-primary"><span class="progress-badge">C++</span>
              <div class="progress">
                <div class="progress-bar progress-bar-striped " data-aos="slide-right" data-aos-offset="10" data-aos-duration="800" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}><span class="progress-value_cplus" >70%</span></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="progress-container progress-primary"><span class="progress-badge">SQL</span>
              <div class="progress">
                <div class="progress-bar progress-bar-striped " data-aos="slide-right" data-aos-offset="10" data-aos-duration="800" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "78%"}}><span class="progress-value_sql" >78%</span></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="progress-container progress-primary"><span class="progress-badge">React</span>
              <div class="progress">
                <div class="progress-bar progress-bar-striped " data-aos="slide-right" data-aos-offset="10" data-aos-duration="800" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "55%"}}><span class="progress-value_react" > 55%</span></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="progress-container progress-primary"><span class="progress-badge">Wordpress</span>
              <div class="progress">
                <div class="progress-bar progress-bar-striped " data-aos="slide-right" data-aos-offset="10" data-aos-duration="800" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}><span class="progress-value_wp" >70%</span></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="progress-container progress-primary"><span class="progress-badge">Powerpoint</span>
              <div class="progress">
                <div class="progress-bar progress-bar-striped " data-aos="slide-right" data-aos-offset="10" data-aos-duration="800" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}><span class="progress-value_pp" >90%</span></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="progress-container progress-primary"><span class="progress-badge">Excel</span>
              <div class="progress">
                <div class="progress-bar progress-bar-striped " data-aos="slide-right" data-aos-offset="10" data-aos-duration="800" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}> <span class="progress-value_excel" >75%</span></div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="progress-container progress-primary"><span class="progress-badge">MS-Word</span>
              <div class="progress">
                <div class="progress-bar progress-bar-striped " data-aos="slide-right" data-aos-offset="10" data-aos-duration="800" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}><span class="progress-value_word" >90%</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</>
            
    


    )
}
export default About;