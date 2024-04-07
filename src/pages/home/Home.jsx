import React from "react";
import "./home.css";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";

export const Home = () => {
  const handleClick = () => {
    window.location.href = "/projects";
  };
  return (
    <>
      <div className="layout">
        <h1 className="name">Rui Ferreira</h1>
        <div className="typewritter">
          <TypeAnimation
            className="identification"
            sequence={["Software Developer", 1000, "Perpetual Learner", 1000]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "3em",
              display: "flex",
              justifyContent: "center",
              color: "#fec544",
            }}
            repeat={Infinity}
          />
        </div>
        <div className="button-home">
          <Button
            className="button"
            variant="contained"
            onClick={handleClick}
            sx={{
              borderRadius: "20px",
              color: "#000000",
              backgroundColor: "#fec544",
              fontSize: "1.5rem",
              padding: "12px 24px",
              "&:hover": {
                backgroundColor: "#f8cd67",
                boxshadow: "0 2px 4px rgb(0 0 0 / 8%)",
                transform: "translateX(5px)",
                transition: "transform 0.3s ease-in-out",
              },
            }}
          >
            EXPLORE
            <IoIosArrowForward />
          </Button>
        </div>
      </div>
    </>
  );
};
