import React, { useState } from "react";
import "./blog.css";
import "../../components/header/header.css";
import img from "../../assets/images/b5.jpg";
import { BsPencilSquare } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { blog } from "../../assets/data/data";

export const BlogPages = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    let blogs = blog.find((blogs) => blogs.id === parseInt(id));
    if (blogs) {
      setBlogs(blogs);
    }
  }, []);

  return (
    <>
      {blogs ? (
        <section className="b-singlePage">
          <div className="container">
            <div className="right">
              <div className="buttons">
                <button
                  className="button"
                  onClick={() => window.open(blogs.link, "_blank")}
                >
                  <FaExternalLinkAlt />
                </button>
              </div>
              <h1 className="title">{blogs.title}</h1>
              <p className="text">{blogs.desc}</p>
              <p className="text">{blogs.text}</p>
              <p className="text">Author: {blogs.author}</p>
              <div className="left">
                <img src={blogs.cover} alt="" />
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};
