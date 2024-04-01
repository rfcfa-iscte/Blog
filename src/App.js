import React from "react";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Blog" component={Blog} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/:id" component={ProjectsPages} />
          <Route exact path="/blog/:id" component={BlogPages} />
          <Route exact path="/blogFilter/:category" component={BlogFilteredPage} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  );
};
export default App;
