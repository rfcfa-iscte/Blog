import React from "react";
import "./about.css";
import { about } from "../../assets/data/data";

export const Identification = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img src="../images/about/pfp.png" alt="Your Image" />
      </div>
      <div className="text-container">
        <h2 className="title">Hi There! I'm Rui Ferreira</h2>
        <p></p>
        <h3 className="subtitle">Software Developer</h3>
        <p className="text">{about.text}</p>
        <div className="list-container">
          <div className="list">
            <div>
              <span className="label">Birthday</span> : {about.bday}
            </div>
            <div>
              <span className="label">Email</span> : {about.mail}
            </div>
            <div>
              <span className="label">From</span> : {about.from}
            </div>
            <div>
              <span className="label">Language</span> : {about.language}
            </div>
            <div>
              <span className="label">Work at</span> : {about.company}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
