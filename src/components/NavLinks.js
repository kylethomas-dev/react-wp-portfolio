import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./../assets/img/kyle-logo.png";

class NavLinks extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/">
          <img className="img-fluid img-logo" src={Logo} alt="Kyle"></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav mr-auto"></ul>
          <ul className="navbar-nav">
            <li className="nav-item pl-4">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item pl-4">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item pl-4">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item pl-4">
              <Link className="btn btn-blue-outline pl-4 pr-4" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavLinks;
