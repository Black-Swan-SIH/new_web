import React from "react";
import "../styles/Button.css";
import { border, height } from "@mui/system";

const Button = ({
  onClick,
  width,
  bgcolor,
  color,
  children,
  borderRadius,
  borderColor,
  padding,
  fontWeight,
  fontSize,
  icon,
  hoverBorder,
  marginRight,
  marginBottom,
  border,
  marginTop,
  height,
}) => {
  return (
    <button
    type="submit"
    onClick={onClick}
      className={`bt ${hoverBorder ? "hover-border" : ""}`}
      style={{
        marginRight: marginRight,
        border: border,
        backgroundColor: bgcolor,
        color: color,
        borderRadius: borderRadius,
        borderColor: borderColor,
        padding: padding,
        fontWeight: fontWeight,
        fontSize: fontSize,
        marginTop: marginTop,
        width: width,
        height: height,
        marginBottom:marginBottom
      }}
    >
      {children}
      {icon && <span className="icon">{icon}</span>}
    </button>
  );
};

export default Button;
