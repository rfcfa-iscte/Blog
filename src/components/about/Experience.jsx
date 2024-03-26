import React from "react";
import "./about.css";
import { about } from "../../assets/data/data";

export const Experience = () => {
  return (
    <div className="experience-section">
      <div className="university">
        <div className="left-experience-section">
          <h1 className="left-title">Education</h1>
        </div>
        <div className="experience-item">
          <div className="edu-text">
            <p className="uni-text">{about.uni} </p>
            <p className="date-text">{about.master}</p>
            <p className="course-text">Master's in {about.course}</p>
          </div>
        </div>
        <div className="experience-item">
          <div className="edu-text">
            <p className="uni-text">{about.uni} </p>
            <p className="date-text">{about.bach}</p>
            <p className="course-text">Bachelor's in {about.course}</p>
          </div>
        </div>
      </div>
      <div className="professional">
        <h2>Professional Experience</h2>
      </div>
    </div>
  );
};
