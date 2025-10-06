import React from "react";
import "../css/investmentPropertyTypes.css";

export default function InvestmentPropertyTypes() {
  return (
    <section className="property-types-section">
      <div className="property-types-container">
        <h2 className="property-types-title">Investment Property Types</h2>
        <p className="property-types-subtitle">
          Explore diverse real estate opportunities tailored to your wealth-building goals
        </p>

        <div className="property-types-grid">
          <div className="property-types-row">
            <button className="property-type-card">Simply duplexes</button>
            <button className="property-type-card">Fourplexes</button>
            <button className="property-type-card">Single Family Homes</button>
          </div>

          <div className="property-types-row single">
            <button className="property-type-card">New Developments</button>
          </div>
        </div>
      </div>
    </section>
  );
}
