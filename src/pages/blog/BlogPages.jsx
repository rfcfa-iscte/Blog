import React, { useState } from "react";
import "./blog.css";
import "../../components/header/header.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { blog } from "../../assets/data/data";
import { IoArrowBackCircleSharp } from "react-icons/io5";

export const BlogPages = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(null);
  console.log("Category:", id); // Log the category parameter
  useEffect(() => {
    let blogs = blog.find((blogs) => blogs.id === parseInt(id));
    if (blogs) {
      setBlogs(blogs);
    }
  }, []);

  const goBack = () => {
    window.history.back();
  };
  return (
    <>
      {blogs ? (
        <section className="b-singlePage">
          <div className="container">
            <div className="buttons">
              <div className="left">
                <button className="button" onClick={goBack}>
                  <IoArrowBackCircleSharp size={30} />
                </button>
              </div>
              <div className="right">
                <button
                  className="button"
                  onClick={() => window.open(blogs.link, "_blank")}
                >
                  <FaExternalLinkAlt size={25} />
                </button>
              </div>
            </div>
            <h1 className="title">{blogs.title}</h1>
            <p className="text">{blogs.desc}</p>
            <p className="text">{blogs.text}</p>
            <p className="text">Author: {blogs.author}</p>
            <div className="left">
              <img src={blogs.cover} alt="" />
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};
