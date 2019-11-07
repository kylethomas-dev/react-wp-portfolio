import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import ProjectList from "./components/ProjectList";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import NavLinks from "./components/NavLinks";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faLinkedinIn, faGithub);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="App-content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/projects" exact component={ProjectList} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

const Header = () => {
  return (
    <section className="navbar-grey">
      <div className="container">
        <NavLinks />
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="pt-4 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="font-light mb-0">Kyle Thomas &copy; 2019</p>
            <p className="footer-brand pt-3">
              <a
                className="pr-3"
                href="https://www.linkedin.com/in/kylethomasdesigns/"
                target="_blank"
              >
                <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
              </a>
              <a href="https://github.com/kylethomas-dev" target="_blank">
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default App;
