import React from 'react';
import '../css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>Invest<span>®</span> Wealth Partners</h3>
        </div>
        <p className="footer-text">
          Building generational wealth through strategic real estate investments in high-growth markets.
        </p>
        <p className="footer-copyright">
          © 2025 Invest Wealth Partners. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;