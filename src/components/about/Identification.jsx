import React from "react";
import "./about.css";
import { about } from "../../assets/data/data";
import { Button } from "@mui/material";

export const Identification = () => {
  const handleDownloadClick = () => {
    const fileUrl = require("../../assets/data/CV Rui Ferreira.pdf");
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "CV.pdf";
    document.body.appendChild(link);
    link.click();
  };
  return (
    <div className="about-container">
      <div className="slide-in-top">
        <div className="image-container">
          <img src="../images/about/pfp.png" alt="Your Image" />
        </div>
      </div>
      <div className="slide-in-top">
        <div className="text-container">
          <h2 className="id-title">Hi There! I'm Rui Ferreira</h2>
          <p></p>
          <h3 className="id-subtitle">Software Developer</h3>
          <p className="id-text">{about.text}</p>
          <div className="list-container">
            <div className="list">
              <div className="id-text">
                <span className="label">Birthday</span> : {about.bday}
              </div>
              <div className="id-text">
                <span className="label">Email</span> : {about.mail}
              </div>
              <div className="id-text">
                <span className="label">From</span> : {about.from}
              </div>
              <div className="id-text">
                <span className="label">Language</span> : {about.language}
              </div>
            </div>
          </div>
          <Button
            className="download-button"
            variant="contained"
            onClick={handleDownloadClick}
            sx={{
              borderRadius: "20px",
              color: "#000000",
              backgroundColor: "#fec544",
              "&:hover": {
                backgroundColor: "#f8cd67",
              },
            }}
          >
            CV Dowload
          </Button>
        </div>
      </div>
    </div>
  );
};
