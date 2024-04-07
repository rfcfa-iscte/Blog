import React from "react";
import "./about.css";
import { Identification } from "../../components/about/Identification";
import { Experience } from "../../components/about/Experience";
import { Publications } from "../../components/about/Publications";
import { Technology } from "../../components/about/Technology";
import { Footer } from "../../components/footer/Footer.jsx";

export const About = () => {
  return (
    <>
      <div>
        <h1 className="about-title">About Me</h1>
        <Identification />

        <h1 className="about-title">Resume</h1>
        <Experience />
        <h1 className="about-title">Publications</h1>
        <Publications />
        <h1 className="about-title">Technology Stack</h1>
        <Technology className="slide-in-top" />
        <Footer />
      </div>
    </>
  );
};
