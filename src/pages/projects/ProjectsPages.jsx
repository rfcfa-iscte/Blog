import React, { useState } from "react";
import "./pages.css";
import "../../components/header/header.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { projects } from "../../assets/data/data";
import { FaGithub } from "react-icons/fa";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";

export const ProjectsPages = () => {
  const { id } = useParams();
  const [projectsL, setBlogs] = useState(null);

  useEffect(() => {
    let projectsL = projects.find((projectsL) => projectsL.id === parseInt(id));
    if (projectsL) {
      setBlogs(projectsL);
    }
  }, []);
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      {projectsL ? (
        <section className="p-singlePage">
          <div className="container">
            <div className="buttons">
              <div className="left">
                <button className="button" onClick={goBack}>
                  <IoArrowBackCircleSharp size={30} />
                </button>
              </div>
              <div className="right">
                {projectsL.link ? (
                  <button
                    className="button"
                    onClick={() => window.open(projectsL.link, "_blank")}
                  >
                    <FaGithub className="icon" size={30} />
                  </button>
                ) : null}
                {projectsL.site ? (
                  <button
                    className="button"
                    onClick={() => window.open(projectsL.site, "_blank")}
                  >
                    <FaExternalLinkAlt size={25} />
                  </button>
                ) : null}
              </div>
            </div>
            <h1 className="title">{projectsL.title}</h1>
            <p className="text">{projectsL.text}</p>
            <p className="text">Author: {projectsL.author}</p>
            <div className="img">
              <img src={projectsL.cover} alt="" />
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};
