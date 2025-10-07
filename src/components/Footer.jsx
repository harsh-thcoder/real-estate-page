import React from 'react';
import '../css/footer.css';
import logo from '../assets/logo.png'; // update with your actual path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <img src={logo} alt="Invest 55 Logo" className="footer-logo-img" />

          <h5 className="footer-title">
             Wealth Partners
          </h5>

          <p className="footer-description">
            Building generational wealth through strategic real estate investments in high-growth markets.
          </p>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>© 2025 Invest 55 Wealth Partners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
