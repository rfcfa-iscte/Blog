import React from "react";
import "./footer.css";
import { AiFillLinkedin } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  const handleGithubClick = () => {
    window.open("https://github.com/rfcfa-iscte", "_blank");
  };
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/ruifcferreira/", "_blank");
  };
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/rui.ferreira9/", "_blank");
  };
  const handleYoutubeClick = () => {
    window.open(
      "https://www.youtube.com/channel/UCITeWt-qhxioVw_A29Unbow",
      "_blank"
    );
  };
  return (
    <>
      <footer className="boxItems">
        <div className="container flex">
          <p></p>
          <div className="social">
            <li>
              <AiFillLinkedin className="icon" onClick={handleLinkedInClick} />
              <FaGithub className="icon" onClick={handleGithubClick} />
              <FaYoutube className="icon" onClick={handleYoutubeClick} />
              <RiInstagramFill
                className="icon"
                onClick={handleInstagramClick}
              />
            </li>
          </div>
        </div>
      </footer>
    </>
  );
};
