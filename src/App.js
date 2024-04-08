import React from "react";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Blog } from "./pages/blog/Blog";
import { Contact } from "./pages/contact/Contact";
import { Projects } from "./pages/projects/Projects";
import { ProjectsPages } from "./pages/projects/ProjectsPages";
import { BlogPages } from "./pages/blog/BlogPages";
import { About } from "./pages/about/About";
import { BlogFilteredPage } from "./pages/blog/BlogFilteredPage";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Blog" element={<Blog />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/projects/:id" element={<ProjectsPages />} />
          <Route exact path="/blog/:id" element={<BlogPages />} />
          <Route
            exact
            path="/blogFilter/:category"
            element={<BlogFilteredPage />}
          />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
