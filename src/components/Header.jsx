import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/PUMA_Logo_Cat.png"
function Header() {
  return (
    <div className="header">
    <div className="header__content">
    <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link> 
          <Link to={"/about"}>
            <li>About</li>
          </Link> 
          <Link to={"/article"}>
            <li>Articles</li>
          </Link> 
          <Link to={"/publish"}>
            <li>Publish</li>
          </Link> 
          
          
          
        </ul>
      </nav>
    </div>
      
    </div>
  )
}

export default Header