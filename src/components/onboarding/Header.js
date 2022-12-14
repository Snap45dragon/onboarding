import React from "react";
import "../../css/components/Header.scss";

function Header({ title, subtitle }) {
  return (
    <div className="header">
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
    </div>
  );
}

export default Header;
