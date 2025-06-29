// Footer.js

import React from 'react';
import './footer.css'; // Adjust the path based on your project structure


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
          <img src="/MyLogo2.png" alt="Your Logo" />
          </div>
          <div className="footer-links">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-social">
            {/* <a href="https://www.linkedin.com/in/allan-moreno-5106a4187/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin">linkedin</i>
            </a> */}
            {/* <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a> */}
          </div> 
        </div>

      </div>
    </footer>
  );
};

export default Footer;
