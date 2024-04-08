import React, { useState, useEffect } from "react";
import "./blog.css";
import { blog } from "../../assets/data/data";
import { AiOutlineTags, AiOutlineClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export const FilteredCards = ({ category }) => {
  console.log("Category:", category);
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    const categoryWithoutSpaces = category.replace(/\s/g, "");

    const filtered = blog.filter((blogItem) => {
      const blogCategoryWithoutSpaces = blogItem.category.replace(/\s/g, "");
      return blogCategoryWithoutSpaces === categoryWithoutSpaces;
    });

    setFilteredBlogs(filtered);
  }, [category]);

  console.log("Filtered Blogs:", filteredBlogs);
  return (
    <>
      <section className="blog">
        <div className="container grid3">
          {filteredBlogs.map((item) => (
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
