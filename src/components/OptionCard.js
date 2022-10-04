import React from "react";
import "../css/components/OptionCard.scss";

function OptionCard({ icon, title, desc, active, error, ...props }) {
  return (
    <div
      className={`option-card ${active ? "active" : ""} ${
        error ? "error" : ""
      }`}
      {...props}
    >
      <div className="icon">{icon}</div>
      <div className="title">{title}</div>
      <div className="desc">{desc}</div>
    </div>
  );
}

export default OptionCard;
