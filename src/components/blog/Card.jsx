import React from "react";
import "./blog.css";
import { blog } from "../../assets/data/data";
import {
  AiOutlineTags,
  AiOutlineClockCircle,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export const Card = () => {
  return (
    <>
      <section className="blog">
        <div className="container grid3">
          {blog.map((item) => (
            <div className="box boxItems" key={item.id}>
             <Link to={`/blog/${item.id}`} className="link">
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
                <div className="date">
                  <div className="left-section">
                    <AiOutlineClockCircle className="time-icon" />
                    <label htmlFor="">{item.date}</label>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </section>
    </>
  );
};
