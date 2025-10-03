import React from "react";
import "../css/WhyInvest.css";
import png from "../assets/png.png"
const points = [
  "Generational wealth through strategic real estate ownership",
  "Passive monthly income without the headaches of property management",
  "Exposure to booming markets with long-term growth potential",
  "Powerful tax benefits designed to maximize after-tax returns",
];

export default function WhyInvest() {
  return (
    <section className="why-invest">
      <h2>
        Why <span>Invest 5S?</span>
      </h2>
      <ul className="why-list">
        {points.map((point, index) => (
          <li key={index} className="why-item">
            <img src={png} alt="check" className="why-icon" />
            <p>{point}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
