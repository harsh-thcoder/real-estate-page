import React from "react";
import "../css/wealthSection.css";
import houseImage from "../assets/house5.png";

export default function WealthSection() {
  return (
    <section className="wealth-section">
      <div className="wealth-container">
        {/* LEFT SIDE: Image */}
        <div className="wealth-image-wrapper">
          <img
            src={houseImage}
            alt="Investment Property"
            className="wealth-image"
          />
          <div className="price-tag">Starting at $624,900</div>
        </div>

        {/* RIGHT SIDE: Text */}
        <div className="wealth-content">
          <h2 className="wealth-title">Ready to Grow Your Wealth?</h2>
          <p className="wealth-description">
            Join a community of investors building lasting legacies through
            smart, tax-advantaged real estate investments.
          </p>
          <button className="cta-button">
            Get the Invest 5S Deal Brief →
          </button>
        </div>
      </div>
    </section>
  );
}
