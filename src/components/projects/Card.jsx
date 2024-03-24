import React from "react";
import "./project.css";
import { projects } from "../../assets/data/data";
import {
  AiOutlineTags,
  AiOutlineClockCircle,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export const Card = () => {
  return (
    <>
      <section className="project">
        <div className="container grid3">
          {projects.map((item) => (
            <div className="box boxItems" key={item.id}>
              <Link to={`/projects/${item.id}`} className="link">
                <div className="img">
                  <img src={item.cover} alt="" />
                </div>

                <div className="details">
                  <div className="tag">
                    <AiOutlineTags className="icon" />
                    <a href="/">#{item.category}</a>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.desc.slice(0, 180)}...</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
