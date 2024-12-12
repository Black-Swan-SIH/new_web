import React, { useState } from "react";
import "../styles/Panel.css";
import Prof from "./Prof.jsx";
import Review from "./Review.jsx";
import { useNavigate } from "react-router-dom";

const Panel = ({
  id,
  text,
  imageSrc,
  name,
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
      console.log(checked);
      onCheckBoxChange(id, checked);
  };
  // const handleClick = () => {
  //   navigate(`/${text}/${id}`);
  // };
  return (
    <div className="flex mb-12 justify-between items-center"  style={{ cursor: "pointer" }}>
      <div style={{ flexBasis: "50%" }}>
        <Prof
          imageSrc={imageSrc}
          name={name}
          unit={unit}
          age={age}
          pronoun={pronoun}
          experience={experience}
          height="12vh"
          width="13vh"
          gap="4em"
          borderRadius="16%"
          nameFontSize="28px"
          nameColor="var(--text-color9)"
          FontSize1="13px"
          FontSize2="13px"
          marginTop={-20}
        />
      </div>
      <div style={{ flexBasis: "30%" }}>
        <Review
          profileScore={profileScore}
          reviews={reviews}
          interview={interview}
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