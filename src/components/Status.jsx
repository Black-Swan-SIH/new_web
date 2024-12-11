import React from "react";
import "../styles/Application.css"

const Status = ({department, type, location, locationType, status}) => {
  return (
    <div id="mainn">
      <div id="picturee"></div>
      <h1>Node.js Developer</h1>
      <div className="flex flex-col justify-start items-center">
        <div id="roww">
          <div className="flex">
            <p className="key">Department:</p>
            <p className="value">{department}</p>
          </div>

          <div className="flex">
            <p className="key">Type:</p>
            <p className="value">{type}</p>
          </div>
        </div>
        <div id="roww">
          <div className="flex">
            <p className="key">Location:</p>
            <p className="value">{location}</p>
          </div>

          <div className="flex">
            <p className="key">Location Type:</p>
            <p className="value">{locationType}</p>
          </div>
        </div>
      </div>
      <p id="status">{status}</p>
    </div>
  );
};

export default Status;
