import React from "react";
import Heading from "./Heading.jsx";
import { FaStar } from "react-icons/fa6";

const Review = ({ profileScore, reviews, interview }) => {
  return (
    <div>
      <div className="flex gap-3">
        <Heading fontSize="13px" fontWeight="500" color="var(--text-color23)">
          Profile Score:
        </Heading>
        <Heading fontSize="13px" fontWeight="600" color="var(--text-color24)">
          {profileScore}
        </Heading>
      </div>
      <div className="flex gap-3">
        <Heading fontSize="13px" fontWeight="500" color="var(--text-color23)">
          Reviews:
        </Heading>
        <div className="flex gap-2 items-center">
          <Heading fontSize="13px" fontWeight="600" color="var(--text-color24)">
            {reviews} / 5
          </Heading>
          <FaStar fontSize="13px"/>
        </div>
      </div>
      <div className="flex gap-3">
        <Heading fontSize="13px" fontWeight="500" color="var(--text-color23)">
          Best Interviewer for:
        </Heading>
        <Heading fontSize="13px" fontWeight="600" color="var(--text-color24)">
          {interview}
        </Heading>
      </div>
    </div>
  );
};

export default Review;
