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
import { SiMysql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaReact } from "react-icons/fa";

export const Technology = () => {
  return (
    <div className="slide-in-top">
      <div className="programming-languages-section">
        <div className="icon-container">
          <FontAwesomeIcon
            icon={faJava}
            className="programming-language-icon"
          />
          <FaReact size={50} className="programming-language-icon" />
          <FontAwesomeIcon
            icon={faHtml5}
            className="programming-language-icon"
          />
          <FontAwesomeIcon
            icon={faCss3}
            className="programming-language-icon"
          />
          <FontAwesomeIcon icon={faJs} className="programming-language-icon" />
          <FontAwesomeIcon icon={faPhp} className="programming-language-icon" />
          <SiMysql size={50} className="programming-language-icon" />
          <DiMongodb size={50} className="programming-language-icon" />
          {/* <img
          src="../images/code/mysql-logo-svgrepo-com.svg"
          alt="MySQL"
          className="programming-language-icon"
        /> */}
          {/* Add more icons as needed */}
        </div>
      </div>
    </div>
  );
};
