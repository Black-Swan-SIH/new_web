import React from "react";
import "../styles/Heading.css";

const Heading = ({ fontSize, color, fontWeight, children }) => {
  return (
    <div>
      <p style={{ fontSize: fontSize, color: color, fontWeight: fontWeight }}>
        {children}
      </p>
    </div>
  );
};

export default Heading;
