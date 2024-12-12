import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../App.css";
import "../styles/custom.css";

function ProgressBar({ value, color }) {
  return (
    <>
      <CircularProgressbarWithChildren
        value={value*10}
        styles={{
          path: {
            stroke: color,
            strokeWidth: 10,
            transformOrigin: "center center",
          },
          trail: {
            stroke: `var(--text-color7)`,
            strokeWidth: 10,
            transformOrigin: "center center",
          },
        }}
      >
        {/* <img
          style={{ width: 250, marginTop: 105 }}
          src="https://cdn-icons-png.flaticon.com/256/552/552721.png"
          alt="doge"
        /> */}
        <div style={{ fontSize: 17}}>
          <strong>{value}</strong>
        </div>
      </CircularProgressbarWithChildren>
    </>
  );
}

export default ProgressBar;
