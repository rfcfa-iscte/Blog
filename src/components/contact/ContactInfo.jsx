import React, { useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub, FaYoutube } from "react-icons/fa";

export const ContactInfo = () => {
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
      "https://www.youtube.com/channel/UCHlkyAhPW8cjvr-aRAfxpug",
      "_blank"
    );
  };
  return (
    <>
      <div className=" social_box">
        <li className="social_list">
          <div className="social_button">
            <AiFillLinkedin
              size={30}
              className="icon"
              color={"#fff"}
              onClick={handleLinkedInClick}
            />
          </div>
          <div className="social_button">
            <FaGithub
              size={30}
              color={"#fff"}
              className="icon"
              onClick={handleGithubClick}
            />
          </div>
          <div className="social_button">
            <FaYoutube
              size={30}
              color={"#fff"}
              className="icon"
              onClick={handleYoutubeClick}
            />
          </div>
          <div className="social_button">
            <RiInstagramFill
              size={30}
              color={"#fff"}
              className="icon"
              onClick={handleInstagramClick}
            />
          </div>
        </li>
      </div>
    </>
  );
};
