
import React from 'react'
import "./contact.scss"
// import { MDBIcon, MDBContainer } from 'mdbreact';

export default function Contact() {
  return (
    <div className="contact" id="contacts">
      <h5 className="text-center mt-3">Contact Me</h5>
      <div className="container">
        <div className="row contents">
          {/* contact Form Code */}

          <div className="col-lg-6 col-md-12 form_section">
            <div className="card">
              <form>
                <div class="mb-3">
                  <label htmlfor="exampleInputPassword1" class="form-label">Your Name</label>
                  <input type="text" class="form-control" id="exampleInputname" />
                </div>
                <div class="mb-3">
                  <label htmlfor="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                  <label htmlfor="exampleInputPassword1" class="form-label">Message</label>
                  <input type="text" class="form-control" id="exampleInputmessage" />
                </div>
                <button type="submit" class="btn btn-primary ">Submit</button>
              </form>
            </div>
          </div>

          {/* contct personal information Code */}
          <div className="col-lg-6 col-md-12 contact_address ">

            <div class="card-body">
              <h6>Reach Me</h6>
              <div className="text-container">
              <p className="text"> <i class="fas fa-house-damage"></i> E-2003, Tower-E,Ajnara Le Garden, Noida Extension(234567)</p>
              <p className="text"><i class="fas fa-phone-alt"></i>+91 9315220549</p>
              <p className="text"><i class="fas fa-envelope-open"></i>developerakky@gmail.com</p>
              </div>

              <div className="social_media_links">
         {/*     <MDBContainer>
      <a href="#!" className="fb-ic mr-3">
        <MDBIcon fab icon="facebook-f" />
      </a>
      <a href="#!" className="tw-ic mr-3">
        <MDBIcon fab icon="twitter" />
      </a>
      <a href="#!" className="gplus-ic mr-3">
        <MDBIcon fab icon="google-plus-g" />
      </a>
      <a href="#!" className="li-ic mr-3">
        <MDBIcon fab icon="linkedin-in" />
      </a>
      <a href="#!" className="ins-ic mr-3">
        <MDBIcon fab icon="instagram" />
      </a>
      <a href="#!" className="pin-ic mr-3">
        <MDBIcon fab icon="pinterest" />
      </a>
      <a href="#!" className="yt-ic mr-3">
        <MDBIcon fab icon="youtube" />
      </a>
      <a href="#!" className="vk-ic mr-3">
        <MDBIcon fab icon="vk" />
      </a>
      <a href="#!" className="so-ic mr-3">
        <MDBIcon fab icon="stack-overflow" />
      </a>
      <a href="#!" className="slack-ic mr-3">
        <MDBIcon fab icon="slack" />
      </a>
      <a href="#!" className="git-ic mr-3">
        <MDBIcon fab icon="github" />
      </a>
      <a href="#!" className="comm-ic mr-3">
        <MDBIcon icon="comments" />
      </a>
      <a href="#!" className="email-ic mr-3">
        <MDBIcon icon="envelope" />
      </a>
      <a href="#!" className="dribbble-ic mr-3">
        <MDBIcon fab icon="dribbble" />
      </a>
         </MDBContainer> */}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}
