import React from "react";
import Heading from "./Heading";

const Det = ({userData,extra,children}) => {
    console.log(userData)
  return (
    <div>
      <p>
      
        <Heading
          fontSize="15px"
          color="rgba(123, 123, 123, 1)"
          fontWeight="600"
        >
          {children}
        </Heading>
        <Heading fontSize="15px" color="var(--text-color)" fontWeight="600">
          {userData}
          {extra}
        </Heading>
      </p>
    </div>
  );
};

export default Det;
