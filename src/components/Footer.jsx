import React from 'react';
import '../styles/main.css';
import logo from '../assets/logo.png'; // adjust path as needed

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-column">
          <h4>REACH US</h4>
          <p>+91-8707727347</p>
          <p>hello@toletglobe.in</p>
          <p>D1/122 Vipul Khand, Gomtinagar, Lucknow</p>
        </div>

        <div className="footer-column">
          <h4>QUICK LINKS</h4>
          <a href="/">About Us</a>
          <a href="/">Services</a>
          <a href="/">Blogs</a>
          <a href="/">Projects</a>
        </div>

        <div className="footer-column">
          <h4>SERVICES</h4>
          <a href="/">Paying Guest</a>
          <a href="/">Flat and Houses</a>
          <a href="/">Offices</a>
          <a href="/">Shops and Godown</a>
        </div>

        <div className="footer-column footer-logo">
          <img src={logo} alt="To-Let Logo" />
          <p>One-stop solution for all your brokerage-free rental needs</p>
          
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 <strong>To-Let Globe</strong> -- Lucknow. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;