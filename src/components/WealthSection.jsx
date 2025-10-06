import React from "react";
import "../css/wealthSection.css";
import houseImage from "../assets/house6.png"; // Update path if needed

export default function WealthSection() {
  return (
    <section className="wealth-section">
      <div className="wealth-container">
        {/* Left side: image */}
        <div className="wealth-image-wrapper">
          <img
            src={houseImage}
            alt="Investment Property"
            className="wealth-image"
          />
          <div className="price-badge">Starting at $515K</div>
        </div>

        {/* Right side: content */}
        <div className="wealth-content">
          <h2 className="wealth-title">
            Build Generational <span>Wealth The Smart Way</span>
          </h2>
          <p className="wealth-description">
            We help you build lasting wealth with real estate powered by cash
            flow, appreciation, and tax advantages.
          </p>
          <button className="cta-button">
            Get the Invest 5S Deal Brief →
          </button>
        </div>
      </div>
    </section>
  );
}