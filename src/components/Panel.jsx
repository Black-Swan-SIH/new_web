import React, { useEffect, useState } from "react";
import "../styles/Panel.css";

import Review from "./Review.jsx";
import { useNavigate } from "react-router-dom";
import Prof1 from "./Prof1.jsx";


const Panel = ({
  id,
  text,
  name,
  department,
  expertise,
  unit,
  age,
  pronoun,
  experience,
  profileScore,
  reviews,
  interview,
  onCheckBoxChange,
}) => {
  const navigate=useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    const checked = event.target.checked;
    setIsChecked(checked);
      console.log(id);
      console.log(name)
      onCheckBoxChange(id, checked,name);
  };
 
  return (
    <div className="flex mb-12 justify-between items-center"  style={{ cursor: "pointer", paddingLeft:"25px", paddingRight:"25px", paddingTop:"5px", paddingBottom:"5px", borderRadius:"10px" , boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)', backgroundColor:"white", background: "white", minWidth:"1000px"}}>
      <div style={{ flexBasis: "50%", marginTop:"10px"}}>
        <Prof1
         
          name={name}
          unit={unit}
          profileScore={profileScore}
          age={age}
          pronoun={pronoun}
          experience={experience}
          height="60px"
          width="13vh"
          gap="4em"
          borderRadius="16%"
          nameFontSize="28px"
          nameColor="var(--text-color9)"
          FontSize1="13px"
          FontSize2="13px"
          marginTop={-20}
          department={department}
          expertise={expertise}
          
        />
      </div>

      <div style={{display: "flex", alignItems: "center", justifyContent: "center" }}>
      <input
        type="checkbox"
        className="custom-checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      </div>
    </div>
  );
};

export default Panel;