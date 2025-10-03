import React from "react";
import house3 from "../assets/house3.png"; // replace with actual image path
import "../css/about.css";

export default function AboutSection() {
  return (
    <section className="about">
      <div className="about-image">
        <img src={house3} alt="House" />
      </div>
      <div className="about-content">
        <h2>
          Build Generational <span className="highlight">Wealth</span> The Smart Way
        </h2>
        <p>
          We help you build lasting wealth with real estate powered by cash flow, 
          appreciation, and tax advantages.
        </p>
        <button className="cta-btn">
          Get the Invest 5S Deal Brief →
        </button>
      </div>
    </section>
  );
}
