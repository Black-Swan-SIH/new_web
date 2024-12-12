import React, { useEffect, useState } from "react";
import ExpandableDiv from "./keySkills.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Job() {
  const renderCircles = (count) => {
    return [...Array(count)].map((_, index) => (
      <div
        key={index}
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "100%",
          backgroundColor: "grey",
        }}
      ></div>
    ));
  };

  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state?.userId;
  const [userData, setUserData] = useState(null);

  const handleClick = () => {
    navigate("/admin/list/experts");
  };

  const handleClick1 = () => {
    navigate("/admin/list/candidates");
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userToken = localStorage.getItem("userToken");
        const response = await axios.get(
          `https://lobster-app-b66lv.ondigitalocean.app/subject/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
            withCredentials: true,
          }
        );
        console.log(response.data.data.subject);
        setUserData(response.data.data.subject);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <>
      <div
        className=" container mt-5 pt-5 pl-5"
        style={{
          width: "91vw",
        }}
      >
        <div className="container ml-5 mt-5 pt-5 pl-5">
          <div className="container ml-5 mt-5 pt-5 pl-5">
            <div className="container mt-5 pt-5">
              <div className="container mt-5 pt-5">
                <div className="row ml-5 pl-5 mt-5 pt-5">
                  <div
                    className="col-lg-8 col-md-12 mt-5 pt-5"
                    style={{
                      width: "45vw",
                    }}
                  >
                    <h1
                      className="bold"
                      style={{ fontSize: "40px", fontWeight: 600 }}
                    >
                      {userData?.title}
                    </h1>
                    <p
                      className="text-muted my-4"
                      style={{ fontWeight: 500, color: "#646464" }}
                    >
                      (100+ Applications)
                    </p>
                    <hr className="m-5"></hr>
                    <h3
                      className="mt-4 pt-5 pb-5"
                      style={{ fontSize: "25px", fontWeight: 550 }}
                    >
                      Job Summary
                    </h3>
                    <p
                      className="text-muted mb-5 pb-5 text-[15px]"
                      style={{
                        fontWeight: 500,
                        color: "#646464",
                      }}
                    >
                      {userData?.description}
                    </p>
                    <hr className="m-5"></hr>

                    <h3
                      className="mt-5 mb-5 pb-3"
                      style={{ fontSize: "25px", fontWeight: 550 }}
                    >
                      Key Skills
                    </h3>

                    <div>
                      <ul
                        style={{
                          transform: "translateX(-10px)",
                        }}
                      >
                        {userData?.recommendedSkills.map((item, index) => (
                            <li key={index}>
                              <ExpandableDiv
                                name={capitalizeFirstLetter(item?.skill)}
                                content={capitalizeFirstLetter(item?.description)}
                                borderRadius="8px"
                                padding="16px"
                                paddingLeft="10px"
                                position="relative"
                                backgroundColor="#9CAFB7"
                                cursor="pointer"
                                width="700px"
                                minWidth="700px"
                                fontSize="22px"
                                fontSize1="16px"
                              />
                            </li>
                          ))}
                      </ul>
                    </div>

                    <button
                      className="btn mt-5 pt-5"
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        borderRadius: "12px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      Edit Job Details
                    </button>
                  </div>
                      <div className="col-lg-4 col-md-12">
                      <div
                    className=" mt-5 pt-5"
                    style={{
                      marginLeft: "90px",
                    }}
                    onClick={handleClick}
                  >
                    <div className="mt-4 mt-5 pt-5 ml-5 pl-5">
                      <h4
                        className="m-3"
                        style={{
                          fontSize: "23px",
                          fontWeight: 600,
                          transform: "translateX(-5px)",
                        }}
                      >
                        Experts
                      </h4>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "3px",
                          maxWidth: "90%",
                        }}
                      >
                        {renderCircles(15)}
                      </div>
                    </div>
                  </div>





                  
                      </div>
                 
                      <div
  style={{
    marginLeft: "750px",
    width: "500px", // Reduced the width
    marginTop: "200px",
    alignContent: "center",
    alignItems: "flex-end", // Adjusted alignment
    position: "absolute",
 
  }}
>
  <div
    className="mt-10 mt-5 pt-5 ml-5 pl-5"
    onClick={handleClick1}
    style={{
      marginLeft: "50px",
      width: "300px", 
    
      height:"500px"// Adjusted to reduce width further
    }}
  >
    <h4
      className="m-3"
      style={{
        fontSize: "23px",
        fontWeight: 600,
        transform: "translateX(-5px)",
      }}
    >
      Candidates
    </h4>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "3px",
        maxWidth: "90%", // Adjusted for better responsiveness
      }}
    >
      {renderCircles(27)}
      <p className="text-muted mt-2">+99 more</p>
    </div>
  </div>
</div>




                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Job;
