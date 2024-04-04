import React from "react";
import "./home.css";
import { TypeAnimation } from "react-type-animation";
import { ContactInfo } from "../../components/contact/ContactInfo";

export const Home = () => {

  return (
    <>
      <div className="landing_page">
        <div className="left_text">
          <h1 className="title_1">Welcome!</h1>
          <TypeAnimation
            className="identification"
            sequence={["I'm Rui", 1000, "I'm a Software Developer", 1000]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "3em", display: "inline-block", color: "#fec544" }}
            repeat={Infinity}
          />
          
          <ContactInfo></ContactInfo>
        </div>
        <div className="profile_image">
          <img src="../images/about/pfp.png" alt="Your Image" />
        </div>
      </div>
    </>
  );
};
