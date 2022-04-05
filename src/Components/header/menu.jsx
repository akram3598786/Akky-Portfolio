
import React from 'react'
import "./menu.scss"

export default function Menu({menuOpen , setmenuOpen}) {
    return (
      
            <div className={ "menu_bar " + (menuOpen && "active")}>
                
                    <ul className="menu_items">
                        <li ><a href="#intro" onClick={()=>setmenuOpen(!menuOpen)}>Intro</a></li>
                        <li><a href="#about" onClick={()=>setmenuOpen(!menuOpen)}>About</a></li>
                        <li><a href="#recent_works" onClick={()=>setmenuOpen(!menuOpen)}>Recent Works</a></li>
                        <li><a href="#contacts" onClick={()=>setmenuOpen(!menuOpen)}>Contacts</a></li>
                    </ul>
                  </div>
    )
}


