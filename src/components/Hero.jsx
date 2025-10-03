import { useState, useEffect } from "react";
import "../css/hero.css";
import house1 from "../assets/house1.png";
import house2 from "../assets/house2.png";

export default function Hero() {
  const images = [house1, house2];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero">
      <div className="hero-background">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Hero ${index + 1}`}
            className={`hero-img ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>

      <div className="hero-overlay">
        <h1>
          Ready to Grow Your <span className="highlight">Wealth?</span>
        </h1>
        <p>"Strategic real estate investments designed for lasting wealth."</p>
      </div>

      {/* Dots Navigation */}
      <div className="hero-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}
