import React from "react";
import "../styles/Userlist.css";
import Heading from "./Heading.jsx";
import ProgressBar from "./progressBar.jsx";
import { useNavigate } from "react-router-dom";
import Profile from "./profile.jsx";

const Userlist = ({ imageSrc, name, age, work, value,id,text }) => {
  const navigate=useNavigate();
  const isValidValue = !isNaN(value) && value !== undefined && value !== null;
  console.log(id)
  const handleClick = () => {
    navigate(`/${text}/${id}`);
  };
  return (
    <div
      className={`userlist-container ${!isValidValue ? 'userlist-container-invalid' : ''}`}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="image-container">
        <img src={imageSrc} alt="Job Image" className="image" />
      </div>
      <div className="text">
        <Heading fontSize="18px" fontWeight="600" className="name" color="var(--text-color5)"        >
          {name}
        </Heading>
        <div className="age">
          <Heading fontSize="11.5px" fontWeight="400" color="var(--text-color19)">Age:</Heading>
          <Heading fontSize="12.5px" fontWeight="550" color="var(--text-color20)">{age}</Heading>
          <Heading fontSize="12.5px" fontWeight="550" color="var(--text-color20)">Years</Heading>
        </div>
        <Heading fontSize="10px" fontWeight="500" className="role" color="var(--text-color11)">
          {work}
        </Heading>
      </div>
      {isValidValue && (
        <div className="suffix">
          <ProgressBar value={value} color="var(--bar-color)" />
        </div>
      )}
    </div>
  );
};

export default Userlist;
