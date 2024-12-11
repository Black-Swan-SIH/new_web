import React from "react";
import "../styles/Application.css"

const Application = ({profileScore, pronouns, age, topSkill, Name}) => {
  return (
    <div id="mainn">
      <div id="picturee"></div>
      <h1>{Name}</h1>
      <div className="flex flex-col justify-start items-center">
        <div id="roww">
          <div className="flex">
            <p className="key">Profile Score:</p>
            <p className="value">{profileScore}</p>
          </div>

          <div className="flex">
            <p className="key">Pronouns:</p>
            <p className="value">{pronouns}</p>
          </div>
        </div>
        <div id="roww">
          <div className="flex">
            <p className="key">Age:</p>
            <p className="value">{age}</p>
          </div>

          <div className="flex">
            <p className="key">Top Skill:</p>
            <p className="value">{topSkill}</p>
          </div>
        </div>
      </div>
      <div>
        <button className="buttonn" id="approve">Approve</button>
        <button className="buttonn" id="reject">Reject</button>
      </div>
    </div>
  );
};

export default Application;
