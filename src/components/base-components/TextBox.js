import React from "react";
import "../../css/components/TextBox.scss";

function TextBox({
  value,
  prefill,
  placeholder,
  label,
  type,
  width,
  error,
  labelHint,
  setValue,
}) {
  return (
    <label className="text-box" style={{ width: width }}>
      <div className="label">
        <span>{label}</span>
        {labelHint && <span className="label-hint">&nbsp;({labelHint})</span>}
      </div>
      <div className={`wrapper ${error ? "error" : ""}`}>
        {prefill && <div className="prefill">{prefill}</div>}
        <input
          placeholder={placeholder}
          value={value}
          type={type}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
    </label>
  );
}

export default TextBox;
