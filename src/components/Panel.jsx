import React from "react";
import Prof from "./Prof";
import Review from "./Review";
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
}) => {
  const navigate=useNavigate();
  const handleClick = () => {
    navigate(`/${text}/${id}`);
  };
  return (
    <div className="flex mb-12 justify-between items-center" onClick={handleClick} style={{ cursor: "pointer" }}>
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
        hey
      </div>
    </div>
  );
};

export default Panel;