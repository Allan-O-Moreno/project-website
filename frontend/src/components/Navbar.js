import React from "react";
import { Navbar as BSNavbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <BSNavbar expand="lg" className="rt-nav" sticky="top">
    <div className="rt-shell rt-nav__inner">
      <BSNavbar.Brand as={NavLink} to="/" className="rt-brand">
        <img src="/images/RedlineLogo2.png" alt="Redline Technical Services LLC" />
        <span className="rt-brand__text">Redline <small>Technical Services LLC</small></span>
      </BSNavbar.Brand>
      <BSNavbar.Toggle aria-controls="primary-navigation" />
      <BSNavbar.Collapse id="primary-navigation">
        <Nav className="ms-auto align-items-lg-center">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/about">About</Nav.Link>
          <Nav.Link as={NavLink} to="/services">Capabilities</Nav.Link>
          <Nav.Link as={NavLink} to="/insights">Project Experience</Nav.Link>
          <Nav.Link as={NavLink} to="/contact" className="rt-nav__cta">Start a project</Nav.Link>
        </Nav>
      </BSNavbar.Collapse>
    </div>
  </BSNavbar>
);

export default Navbar;
