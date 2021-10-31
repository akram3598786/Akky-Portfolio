
// import React from 'react'
import "./header.scss"
// import AccessibilityNewTwoToneIcon from '@material-ui/icons/AccessibilityNewTwoTone';


export const Header = ({menuOpen , setmenuOpen}) => {


    return (
         
         <div className={"top_bar " + (menuOpen && "active")}>
          <div className="wrapper"> 

              <div className="left_area">
                  <a href="#intro" className="logo">Akram</a>
                  <div className="nav_container">
                   
                      <p class="font-monospace"><span><i class="fas fa-phone-square-alt"></i></span> +91-9315220549</p>
                      <p class="font-monospace"><span><i class="fas fa-at"></i></span> developerakky@gmail.com</p>  
                  
                  </div>
              </div>
              
              <div className="right_area">
                  <div className="hamburger" onClick={()=>setmenuOpen(!menuOpen)}>
                      <span className="line-1"></span>
                      <span className="line-2"></span>
                      <span className="line-3"></span>
                  </div>
              </div>
          </div>
        </div>
    )
}
export default Header;
