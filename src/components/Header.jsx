import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/PUMA_Logo_Cat.png";
function Header() {
  let links = [
    { name: "home", id: "123" },
    { name: "about", id: "456" },
    { name: "articles", id: "789" },
    { name: "publish", id: "000" },
  ];

  const [open, setOpen] = useState(false);

  const openAndclose = () => {
    setOpen((prev) => !prev);
  };

  return ( <>
    <div className="header">
      <div className="header__content">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <ul>{links.map((link) => (
              <Link key={link.id} to={`/${link.name}`}>
                <li className="mobile_li" style={{ textTransform: "capitalize" }}>{link.name}</li>
              </Link>
            ))}</ul>
        </nav>
      </div>
      
      
    </div>
   {/* Mobile view */}
   <div onClick={openAndclose} className="hambarger">
        {open ? (
          <i class="fa-solid fa-xmark"></i>
        ) : (
          <i class="fa-solid fa-bars"></i>
        )}
      </div>
    {open && (
        <div className="mobile_view">
          <ul className="mobile_ul">
            {links.map((link) => (
              <Link key={link.id} to={`/${link.name}`}>
                <li className="mobile_li" style={{ textTransform: "capitalize" }}>{link.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      )}
       
    </>
  );
}

export default Header;
