import React from 'react';
import '../css/hero.css';
import houseImage from '../assets/house5.png'; // Use a single image

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <img
          src={houseImage}
          alt="Hero"
          className="hero-img"
        />
      </div>

      <div className="hero-overlay">
        <h1>
          Ready to Grow Your <span className="highlight">Wealth?</span>
        </h1>
        <p>"Strategic real estate investments designed for lasting wealth."</p>
      </div>
    </section>
  );
}