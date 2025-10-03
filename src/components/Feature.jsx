import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Avatar,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PercentIcon from "@mui/icons-material/Percent";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import "../css/Feature.css";

const items = [
  {
    id: "panel1",
    title: "Monthly Cash Flow",
    content:
      "Invest in high-performing, income-producing properties that generate consistent monthly distributions. Whether you're building passive income for today or compounding wealth for the next generation, our approach keeps cash flowing into your account.",
    icon: <AttachMoneyIcon />,
  },
  {
    id: "panel2",
    title: "Market Growth",
    content:
      "We focus on high-demand, rapidly growing Texas markets — where population, job growth, and business expansion continue to drive property appreciation. That means your investment doesn't just pay you now — it grows in value over time.",
    icon: <TrendingUpIcon />,
  },
  {
    id: "panel3",
    title: "Secure Financing",
    content:
      "Through strategic partnerships and expert underwriting, investors gain access to competitive financing with rates starting as low as 3.75%, amplifying your returns and accelerating your wealth-building journey.",
    icon: <PercentIcon />,
  },
  {
    id: "panel4",
    title: "Tax Benefits",
    content:
      "Unlock one of real estate's most powerful wealth-building tools. Our properties are structured to take advantage of cost segregation, allowing you to significantly reduce taxable income and reinvest more of your returns.",
    icon: <ReceiptLongIcon />,
  },
];

const FeaturesSection = () => {
  // Track only one expanded panel at a time
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panelId) => (event, isExpanded) => {
    setExpanded(isExpanded ? panelId : false);
  };

  return (
    <div className="features-section">
      <div className="features-grid">
        {items.map((item) => (
          <Accordion
            key={item.id}
            expanded={expanded === item.id}
            onChange={handleChange(item.id)}
            className="accordion-card"
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Avatar className="accordion-icon">{item.icon}</Avatar>
              <Typography className="accordion-title">
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="accordion-text">
                {item.content}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
