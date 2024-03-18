import React from "react"
import logo from "../../assets/images/logo.png"
import "./header.css"
import { nav } from "../../assets/data/data"
import { Link } from "react-router-dom"

export const Header = () => {
   window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.scrollY > 100)
  }) 
  return (
    <>
      <header className='header'>
        <div className='scontainer flex'>
          <div className='logo'>
            <img src={logo} alt='logo' width='50px' />
          </div>
          <nav>
            <ul>
              {nav.map((link) => (
                <li key={link.id}>
                  {link.text.split(" ").map((word, index) => (
                    <span className="word" key={index}>
                      <Link to={link.url}>{word}</Link>
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
