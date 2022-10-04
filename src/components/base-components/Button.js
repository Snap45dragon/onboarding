import React from "react";
import "../../css/components/Button.scss";

function Button({ name, type, width, ...props }) {
  return (
    <button className={`button ${type}`} style={{ width: width }} {...props}>
      {name}
    </button>
  );
}

export default Button;
