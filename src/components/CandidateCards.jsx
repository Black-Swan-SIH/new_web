import React from "react";
import Button from "./Button.jsx";
import ExpandableDiv from "./keySkills.jsx";
import { useState } from "react";
function CandidateCards({ height,height2 }) {
  const [divExpanded, setDivExpanded] = useState(false);
  const divExpand = () => {
    setDivExpanded(!divExpanded);
  };
  return (
    <>
      <div
        style={{
          marginRight: "35px",
          width: "320px",
          borderRadius: "10px",
          marginTop: "10px",
          backgroundColor: "white",
          height:divExpanded ? height2 : height
        }}
      >
        <div className="ml-5 pl-5">
          <Button
            marginRight="10px"
            bgcolor="lightGrey"
            marginTop="15px"
            width="70px"
            height="20px"
            borderRadius="20px"
            color="black"
            children="closed"
          />
          <h1
            className="mt-5 pt-5"
            style={{ fontWeight: "550", fontSize: "16px" }}
          >
            Advertisement No. 1717
          </h1>
          <h1 className="mt-3" style={{ fontWeight: "500", fontSize: "13px" }}>
            <strong>Status</strong>: Result Declared
          </h1>
          <hr className="my-5"></hr>
          <ul>
            <li>
              {" "}
              <div onClick={divExpand}>
              <ExpandableDiv
                name="Cut-offs and Interview Marks"
                content="content"
                borderRadius="8px"
                padding="8px"
                paddingLeft="5px"
                position="relative"
                backgroundColor="#9CAFB7"
                cursor="pointer"
                width="270px"
                minWidth="270px"
                fontSize="14px"
                fontSize1="8px"
               
              />
              </div>
             <div onClick={divExpand}>
             <ExpandableDiv
                name="Recommendation Status"
                content="Recommendations for Selection for Vacancies in various disciplines including: Mechanical Engg (Item no. 2), Material Science & Engg (Item no. 5), Production & Industrial Engg (Item no. 15), etc."
                borderRadius="8px"
                padding="8px"
                paddingLeft="5px"
                position="relative"
                backgroundColor="#9CAFB7"
                cursor="pointer"
                width="270px"
                minWidth="270px"
                fontSize="14px"
                fontSize1="6px"
              />
             </div>



            </li>
          </ul>
        </div>
      </div>


    </>
  );
}

export default CandidateCards;
