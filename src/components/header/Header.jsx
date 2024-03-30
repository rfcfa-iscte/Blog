import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import "./header.css";
import { nav } from "../../assets/data/data";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Fab } from "@mui/material";

export const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });
  const [isToggleIcon, setIsToggleIcon] = useState(false);

  const toggleMenu = () => {
    setIsToggleIcon(!isToggleIcon);
  };

  return (
    <>
      <header className="header">
        <div className="container-header">
          <div className="logo">
            <li>
              <Link to="/">{<img src={logo} alt="logo" width="50px" />}</Link>
            </li>
          </div>
          <nav>
            <ul
              className={`header-container-menu ${
                isToggleIcon ? "active" : ""
              }`}
            >
              {nav.map((link) => (
                <li key={link.id}>
                  {link.text.split(" ").map((word, index) => (
                    <span className={"header-container-menu-item"} key={index}>
                      <Link to={link.url} onClick={toggleMenu}>
                        {word}
                      </Link>
                    </span>
                  ))}
                </li>
              ))}
            </ul>
            <div className="header-toggle" onClick={toggleMenu}>
              {isToggleIcon ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
