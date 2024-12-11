import React from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import { userAtom } from "../atoms/name.jsx";
import Det from "./Det.jsx";
import { fontSize } from "@mui/system";

function Details({userId}) {
  return (
    <RecoilRoot>
      <UserInfo id={userId} />
    </RecoilRoot>
  );
}

function UserInfo({ id }) {
  const userData = useRecoilValue(userAtom(id)); // Fetch user data using atomFamily

  return (
    <div>
      {userData ? (
        <div>
          <div className="dog"style={{fontSize:"2px"}}>
          <Det userData={userData.name} style={{ fontSize: "30px" }}></Det>
          </div>
         
          <Det userData={userData.age} extra=" Years">Age</Det>
          <Det userData={userData.post}>Experience</Det>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Details;
