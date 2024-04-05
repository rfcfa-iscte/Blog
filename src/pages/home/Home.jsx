import React from "react";
import "./home.css";
import { TypeAnimation } from "react-type-animation";
import { ContactInfo } from "../../components/contact/ContactInfo";
import { Button } from "@mui/material";

export const Home = () => {
  const handleDownloadClick =()=>{
    window.location.href="/projects"
  }
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
            style={{
              fontSize: "3em",
              display: "inline-block",
              color: "#fec544",
            }}
            repeat={Infinity}
          />
          <div className="button-container">
            <Button
              className="project-button"
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
              Check out my Projects!
            </Button>
              <ContactInfo />
          </div>
        </div>
        <div className="profile_image">
          <img src="../images/about/pfp.png" alt="Your Image" />
        </div>
      </div>
    </>
  );
};
