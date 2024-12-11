import React from "react";
import Application from "../components/Application.jsx";
import Heading from "../components/Heading.jsx";
import Itemcount from "../components/Itemcount.jsx";

const JobApplications = () => {
  return (
    <div className="mt-[130px] flex flex-col justify-center items-center mb-5">
        <div className="head">
        <Heading fontSize="40px" fontWeight="600" color="var(--text-color9)">
          Job Applications
        </Heading>
        <div className="items">
          <Itemcount head="Total Jobs" value={100} />
          <Itemcount head="Closed" value={50} />
          <Itemcount head="Open" value={50} />
        </div>
      </div>
      <hr
                  style={{
                    width: "64vw",
                    marginTop: "40px",
                    marginBottom: "40px",
                    border: "none",
                    backgroundColor: "grey",
                    height: "1px",
                  }}
                ></hr>      <div className="flex flex-col w-screen items-center justify-center mt-8">
        <Application
          Name={"Om Rajpal"}
          age={19}
          profileScore={"91.2"}
          pronouns={"He / Him"}
          topSkill={"Flutter Developer"}
        />
        <Application
          Name={"Om Rajpal"}
          age={19}
          profileScore={"91.2"}
          pronouns={"He / Him"}
          topSkill={"Flutter Developer"}
        />
        <Application
          Name={"Om Rajpal"}
          age={19}
          profileScore={"91.2"}
          pronouns={"He / Him"}
          topSkill={"Flutter Developer"}
        />
        <Application
          Name={"Om Rajpal"}
          age={19}
          profileScore={"91.2"}
          pronouns={"He / Him"}
          topSkill={"Flutter Developer"}
        />
        <Application
          Name={"Om Rajpal"}
          age={19}
          profileScore={"91.2"}
          pronouns={"He / Him"}
          topSkill={"Flutter Developer"}
        />
        <Application
          Name={"Om Rajpal"}
          age={19}
          profileScore={"91.2"}
          pronouns={"He / Him"}
          topSkill={"Flutter Developer"}
        />
        <Application
          Name={"Om Rajpal"}
          age={19}
          profileScore={"91.2"}
          pronouns={"He / Him"}
          topSkill={"Flutter Developer"}
        />
      </div>
    </div>
  );
};

export default JobApplications;
