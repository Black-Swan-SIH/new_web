import React from "react";
import "../styles/Prof.css";
import Heading from "./Heading.jsx";
import Button from "./Button.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Prof = ({
  imageSrc,
  name,
  unit,
  age,
  pronoun,
  experience,
  height,
  width,
  gap,
  borderRadius,
  nameFontSize,
  nameColor,
  FontSize1,
  FontSize2,
  marginTop,
  marginBottom,
  display,
  userId,
  subject,
}) => {
  const navigate = useNavigate();

  const handleEditProfile = async () => {
    try {
      const userToken = localStorage.getItem("userToken");
      const response = await axios.get(
        `https://lobster-app-b66lv.ondigitalocean.app/subject/${subject}/sorteddata`,{
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
          withCredentials: true,
        }
      );
      const data = response.data;
      console.log(data); // Handle the fetched data as needed
      navigate(`/candidate/${userId}/panel`,{state:{userId}});
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("An error occurred while fetching data. Please try again.");
    }
  };
  return (
    <div className="flex" style={{ gap: gap }}>
      <div
        className="image-pcontainer"
        style={{ height: height, width: width, borderRadius: borderRadius }}
      >
        <img src={imageSrc} alt="profile" className="pimage" />
      </div>
      <div style={{ marginTop: marginTop }}>
        {display ? (
          <Button
            marginRight="-10px"
            border="1px solid black"
            backgroundColor="white"
            marginTop="15px"
            width="70px"
            height="20px"
            borderRadius="20px"
            color="grey"
            borderColor="grey"
            children="Verified"
          />
        ) : (
          <Button backgroundColor="white" />
        )}

        <Heading fontSize={nameFontSize} fontWeight="600" color={nameColor}>
          {name}
        </Heading>
        <div className="flex gap-8" style={{ marginBottom: marginBottom }}>
          <div className="flex  gap-3">
            <Heading
              fontSize={FontSize1}
              fontWeight="500"
              color="var(--text-color23)"
            >
              Unit:
            </Heading>
            <Heading
              fontSize={FontSize2}
              fontWeight="600"
              color="var(--text-color24)"
            >
              {unit}
            </Heading>
          </div>
          <div className="flex gap-3">
            <Heading
              fontSize={FontSize1}
              fontWeight="500"
              color="var(--text-color23)"
            >
              Age:
            </Heading>
            <Heading
              fontSize={FontSize2}
              fontWeight="600"
              color="var(--text-color24)"
            >
              {age}
            </Heading>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex  gap-3">
            <Heading
              fontSize={FontSize1}
              fontWeight="500"
              color="var(--text-color23)"
            >
              Pronouns:
            </Heading>
            <Heading
              fontSize={FontSize2}
              fontWeight="600"
              color="var(--text-color24)"
            >
              {pronoun}
            </Heading>
          </div>
          <div className="flex gap-3 justify-start align-bottom">
            <Heading
              fontSize={FontSize1}
              fontWeight="500"
              color="var(--text-color23)"
            >
              Experience:
            </Heading>
            <Heading
              fontSize={FontSize2}
              fontWeight="600"
              color="var(--text-color24)"
            >
              {experience}
            </Heading>
          </div>
        </div>
        {display ? (
          <Button
            onClick={handleEditProfile}
            color="white"
            bgcolor="black"
            marginBottom="15px"
            width="120px"
            height="30px"
            borderRadius="10px"
            children="Select Panel"
            marginTop="15px"
            fontSize="13px"
          />
        ) : (
          <Button backgroundColor="white" />
        )}
      </div>
    </div>
  );
};

export default Prof;
