import React from "react";
import Button from "./Button.jsx";
import { RecoilRoot, useRecoilValue } from "recoil";
import { userAtom } from "../atoms/name";

const Skills = ({ userId }) => {
  return (
    <RecoilRoot>
      <SkillsInfo id={userId} />
    </RecoilRoot>
  );
};

function SkillsInfo({ id }) {
  const userData = useRecoilValue(userAtom(id));

  if (!userData || !userData.skills) {
    return <div>Loading...</div>; // Handle loading state
  }
  return (
    <div className="flex justify-center items-center font-bold">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center items-center">
        {userData.skills.map((skill, index) => (
          <Button key={index} borderRadius="20px" bgcolor="grey" color="var(--textcolor)">
            {skill}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Skills;