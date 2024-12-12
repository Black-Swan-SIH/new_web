import React from "react";
import "../styles/Prof.css";
import Heading from "./Heading.jsx";
import Button from "./Button.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Prof1 = ({
  name,
  department,
  profileScore,
  experience,
  expertise,
  gap,
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
      if (!userToken) {
        alert("User token is missing. Please log in.");
        return;
      }
      
      const response = await axios.get(
        `https://lobster-app-b66lv.ondigitalocean.app/subject/${subject}/sorteddata`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
          withCredentials: true,
        }
      );

      const data = response.data;
      console.log(data); // Handle the fetched data as needed
      navigate(`/candidate/${userId}/panel`, { state: { userId } });
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("An error occurred while fetching data. Please try again.");
    }
  };

  return (
    <div className="flex" style={{ gap: gap }}>
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
          {name || "Name not available"}
        </Heading>

        <div className="flex gap-8" style={{ marginBottom: marginBottom }}>
          <div className="flex gap-3">
            <Heading
              fontSize={FontSize1}
              fontWeight="500"
              color="var(--text-color23)"
            >
              Department:
            </Heading>
            <Heading
              fontSize={FontSize2}
              fontWeight="600"
              color="var(--text-color24)"
            >
              {department || "N/A"}
            </Heading>
          </div>

          <div className="flex gap-3">
            <Heading
              fontSize={FontSize1}
              fontWeight="500"
              color="var(--text-color23)"
            >
              Profile score:
            </Heading>
            <Heading
              fontSize={FontSize2}
              fontWeight="600"
              color="var(--text-color24)"
            >
              {profileScore || "N/A"}
            </Heading>
          </div>
        </div>

        <div className="flex gap-8">
        <div className="flex gap-3">
  <Heading
    fontSize={FontSize1}
    fontWeight="500"
    color="var(--text-color23)"
  >
    Expertise:
  </Heading>
  <div style={{width: "40vw", fontSize: "12px", fontWeight: "500", overflow: "hidden" }}>
    {expertise && expertise.length > 0 ? (
      <p>{expertise.join(", ")}</p>
    ) : (
      <p>No items available.</p>
    )}
  </div>
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
              {experience || "N/A"}
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

export default Prof1;
