import React from "react";
import "./home.css";

export const Home = () => {
  return (
    <>
      <h1>Welcome!</h1>
      <div className="typewriter">
        <h2>My name is Rui Ferreira</h2>
      </div>
      <h3></h3>
      <div className="profile-image">
        <img src="../images/about/pfp.png" alt="Your Image" />
      </div>
    </>
  );
};
