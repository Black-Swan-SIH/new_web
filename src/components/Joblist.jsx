import React from "react";
import "../styles/JobList.css";
import Heading from "./Heading.jsx";

const Joblist = ({ imageSrc, jobs, applications, open,backgColor }) => {
  return (
    <div className="ccontainer" style={{backgroundColor:backgColor}}>
      <div className="image-ccontainer">
        <img src={imageSrc} alt="Job Image" className="cimage" />
      </div>
      <div className="ctext">
        <Heading fontSize="15px" fontWeight="600" color="var(--text-color5)" className="job">
          {jobs}
        </Heading>
        <Heading fontSize="11px" fontWeight="500" color="var(--text-color8)" className="application">
          Applications: {applications}
        </Heading>
        <Heading fontSize="8px" fontWeight="500" color="var(--text-color11)"className="open">
          {open}
        </Heading>
      </div>
    </div>
  );
};

export default Joblist;
