// components/Navbar.js - Common navigation component
import React, { useState } from "react";
import { Navbar as BSNavbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showInsights, setShowInsights] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <BSNavbar bg="light" variant="light" expand="lg">
      <div className="container">
        <BSNavbar.Brand
          as={NavLink}
          to="/"
          style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
        >
          <img
            src="/images/RedlineLogo2.png"
            alt="RedLine Technical Services logo"
            className="navbar-brand__logo"
          />
          <span>RedLine Technical Services</span>
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="navbarNav" />
        <BSNavbar.Collapse id="navbarNav" className="justify-content-end">
          <Nav>
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>

            <NavDropdown
              title="About"
              id="nav-about"
              show={showAbout}
              onMouseEnter={() => setShowAbout(true)}
              onMouseLeave={() => setShowAbout(false)}
            >
              <NavDropdown.Item as={NavLink} to="/about/mission">Mission</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/about/values">Values</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/about/team">Team</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Services"
              id="nav-services"
              show={showServices}
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <NavDropdown.Item as={NavLink} to="/services#schematics">Electrical Schematics</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services#automation">Automation Programming</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services#commissioning">Startup & Commissioning</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services#maintenance">Maintenance Programs</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Insights"
              id="nav-insights"
              show={showInsights}
              onMouseEnter={() => setShowInsights(true)}
              onMouseLeave={() => setShowInsights(false)}
            >
              <NavDropdown.Item as={NavLink} to="/insights#field-services">Field services insights</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/insights#automation-best-practices">Automation best practices</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/insights#maintenance-programs">Maintenance strategies</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Contact"
              id="nav-contact"
              show={showContact}
              onMouseEnter={() => setShowContact(true)}
              onMouseLeave={() => setShowContact(false)}
            >
              <NavDropdown.Item as={NavLink} to="/contact/form">Contact Form</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/contact/info">Company Info</NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link as={NavLink} to="/pricing">
              Pricing
            </Nav.Link> */}
          </Nav>
        </BSNavbar.Collapse>
      </div>
    </BSNavbar>
  );
};

export default Navbar;
