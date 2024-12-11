import React from "react";
import "../styles/Input.css";

const Input = ({
  type = "text", // Default type
  children,
  name,
  value,
  onChange,
  color = "#000", // Default color
  background = "#fff", // Default background
  borderRadius = "4px", // Default border-radius
  boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.1)", // Default box-shadow
  placeholderColor,
}) => {
  const placeholderClass = placeholderColor ? `placeholder-${placeholderColor}` : "";

  return (
    <div className="form-group">
      <label className="label" htmlFor={name}>
        {children}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        style={{
          color: color,
          background: background,
          borderRadius: borderRadius,
          boxShadow: boxShadow,
        }}
        className={`input ${placeholderClass}`}
        required
      />
    </div>
  );
};

export default Input;
