import React from "react";
import "./about.css";
import {
  faHtml5,
  faCss3,
  faJs,
  faJava,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaPhp } from "react-icons/fa";

export const Technology = () => {
  return (
    <div className="slide-in-top">
      <div className="programming-languages-section">
        <div className="icon-container">
          <FaJava size={50} className="programming-language-icon" />
          <IoLogoJavascript size={50} className="programming-language-icon" />
          <TbBrandNextjs size={50} className="programming-language-icon" />
          <SiTypescript size={50} className="programming-language-icon" />
          <FaReact size={50} className="programming-language-icon" />
          <FaHtml5 size={50} className="programming-language-icon" />
          <FaCss3 size={50} className="programming-language-icon" />
          <FaPhp size={50} className="programming-language-icon" />
          <SiMysql size={50} className="programming-language-icon" />
          <DiMongodb size={50} className="programming-language-icon" />
        </div>
      </div>
    </div>
  );
};
