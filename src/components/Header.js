import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="color-primary">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">
              Name &amp; Title
            </a>
          </div>
        </nav>
        <div className="tab-bar  color-primary--dark">
          <a href="#overview" className="layout__tab is-active">
            Overview
          </a>
          <a href="#features" className="layout__tab">
            Features
          </a>
          <a href="#features" className="layout__tab">
            Details
          </a>
          <a href="#features" className="layout__tab">
            Technology
          </a>
          <a href="#features" className="layout__tab">
            FAQ
          </a>
          <button
            className="btn-floating btn-large waves-effect waves-light red"
            id="add"
          >
            <i className="material-icons" role="presentation">
              add
            </i>
            <span className="visuallyhidden">Add</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
