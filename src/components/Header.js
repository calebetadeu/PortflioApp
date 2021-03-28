import React from 'react'
import Typed from 'react-typed'
const Header = () => {
    return (
           <div className="header-wraper">
               <div className="main-info">
                   <h1>Web and Mobile developer </h1>
                  <Typed
                  className="typed-text"
                  strings={["Kotlin","Java","React","Javascript"]}
                  typeSpeed={40}
                  backspeed={60}
                  loop
                  />
                  <a href="#" className="btn-main-offer" >Contact-me</a>
               </div>
           </div>
    )
}

export default Header;

