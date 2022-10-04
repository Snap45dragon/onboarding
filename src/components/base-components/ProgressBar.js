import React from "react";
import "../../css/components/ProgressBar.scss";

function ProgressBar({ stateCount, currentState }) {
  const stateProgress = Array.from(Array(stateCount)).map((e, index) => (
    <div
      className={`status ${index + 1 <= currentState ? "active" : ""}`}
      key={index}
    >
      <div className="wrapper">
        <div className="number">{index + 1}</div>
      </div>
    </div>
  ));
  return <div className="progress-bar">{stateProgress}</div>;
}

export default ProgressBar;
