import React, { useEffect, useState } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../App.css";
import "../styles/custom.css";
// import Details from "./Details.jsx";
// import Skills from "./Skills.jsx";
import { RecoilRoot } from "recoil";
import TopSkills from "./topSkills.jsx";
import Cards from "./Card.jsx";
import Prof from "./Prof.jsx";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

function Profile({ value, color, userId, text }) {
  return (
    <RecoilRoot>
      <ProfilePage value={value} color={color} userId={userId} text={text} />
    </RecoilRoot>
  );
}

function ProfilePage({ value, color }) {
  const { userId, text } = useParams();
  const [userData, setUserData] = useState(null);
  const location = useLocation();
  const expertIds = location.state?.expertIds || [];
  const [expertsData, setExpertsData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userToken = localStorage.getItem("userToken");
        const response = await axios.get(
          `https://lobster-app-b66lv.ondigitalocean.app/${text}/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
            withCredentials: true,
          }
        );
        console.log(response.data.data);
        setUserData(response.data.data[text]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchUserData();
  }, [userId, text]);

  useEffect(() => {
    const fetchExpertsData = async () => {
      try {
        const userToken = localStorage.getItem("userToken");
        console.log(expertIds);
        const data = [];
        for (const id of expertIds) {
          const response = await axios.get(
            `https://lobster-app-b66lv.ondigitalocean.app/expert/${id}`,
            {
              headers: {
                Authorization: `Bearer ${userToken}`,
              },
              withCredentials: true,
            }
          );
          console.log(response.data.data);
          data.push(response.data.data.expert);
        }
        setExpertsData(data);
      } catch (error) {
        console.error("Error fetching experts data:", error);
      }
    };
    if (expertIds.length > 0) {
      fetchExpertsData();
    }
  }, [expertIds]);

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const millisecondsToYear = (milliseconds) => {
    const years = milliseconds / (1000 * 60 * 60 * 24 * 365.25);
    return years.toFixed(1);
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <>
      <div
        className="container"
        style={{ marginLeft: "70px", width: "1350px", marginRight: "0px" }}
      >
        <div className="container mt-0 pt-5" style={{ marginLeft: "30px" }}>
          <div
            className="container row mt-5 pt-5 "
            style={{ marginTop: "90px" }}
          >
            <Prof
              imageSrc="https://static.vecteezy.com/system/resources/previews/008/306/791/non_2x/square-with-round-corner-glyph-black-icon-vector.jpg"
              name={userData.name}
              unit="1st Reconnaissance Squadron"
              age={calculateAge(userData.dateOfBirth)}
              pronoun={capitalizeFirstLetter(userData.gender)}
              experience="Beginner"
              height="240px"
              width="240px"
              gap="50px"
              borderRadius="15px"
              nameFontSize="47px"
              nameColor="black"
              FontSize1="13px"
              FontSize2="13px"
              marginTop="15px"
              marginBottom="6px"
              display="1"
              userId={userId}
              subject={userData.subject}
            />
          </div>
        </div>

        <div className="container row g-4 ml-5 pl-5">
          <div className="px-5 container ml-5 pl-5">
            <div
              className="col-md-5 pl-5 pr-5 pt-5"
              style={{ marginLeft: "0px" }}
            >
              <div className="px-5 mx-5">
                <h4
                  style={{
                    fontSize: "27px",
                    fontWeight: "600",
                    marginBottom: "10px",
                  }}
                >
                  Top Skills
                </h4>
                <p className="text-muted text-s font-medium">
                  Key Skill &nbsp;•{" "}
                  <span style={{ color: "black" }}>
                    &nbsp;&nbsp;Node.js Developer
                  </span>
                </p>
                <ul className="mr-5 pr-5">
                  {userData.skills.map((skill, index) => (
                    <li
                      key={index}
                      style={{
                        marginBottom: "10px",
                        marginTop: index === 0 ? "15px" : "10px",
                      }}
                    >
                      <TopSkills
                        value={millisecondsToYear(skill.duration)}
                        skill={skill.skill}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              {text === "expert" && (
                <div className="px-5 mx-5 mt-3">
                  <h1
                    style={{
                      fontSize: "27px",
                      fontWeight: "600",
                      marginBottom: "10px",
                      marginTop: "10px",
                    }}
                  >
                    Reviews
                  </h1>
                  <p className="text-muted text-[14px]">
                    4.8 / 5 &nbsp;
                    <span style={{ color: "black" }}>
                      <i class="fa-solid fa-star"></i>
                    </span>
                  </p>

                  <ul className="pt-3">
                    <li>
                      <p>Jordan k.</p>
                      <p className="text-muted" style={{ maxWidth: "300px" }}>
                        Lorem ipsum dolor, sit amet consectetur...{" "}
                      </p>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="col-md-4">
              <div
                className=""
                style={{ marginRight: "10px", marginLeft: "-50px" }}
              >
                <h4
                  style={{
                    fontSize: "27px",
                    fontWeight: "600",
                    marginTop: "5px",
                    marginBottom: "15px",
                  }}
                >
                  Scheduled Interviews
                </h4>
                <ul>
                  <li style={{ marginBottom: "5px" }}>
                    <Cards title="Node.js Developer" />
                  </li>
                  <li style={{ marginBottom: "5px" }}>
                    <Cards title="Node.js Developer" />
                  </li>
                  <li style={{ marginBottom: "5px" }}>
                    <Cards title="Node.js Developer" />
                  </li>
                </ul>

                <a href="/" className="text-primary" style={{ color: "black" }}>
                  View All
                </a>
                <div>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option value="">Select an option</option>
                    {expertsData.map((expert) => (
                      <option key={expert.id} value={expert.id}>
                        {expert.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "-5px",
                  marginLeft: "15px",
                }}
              >
                <h4
                  style={{
                    marginBottom: "-40px",
                    fontSize: "27px",
                    fontWeight: "600",
                    marginRight: "15px",
                  }}
                >
                  {text === "candidate" ? "Relevancy Score" : "Profile Score"}
                </h4>
                <div
                  style={{
                    transform: "scale(0.6)",
                    padding: "10px",
                    width: "300px",
                  }}
                >
                  <CircularProgressbarWithChildren
                    value={Math.round(
                      text === "candidate"
                        ? userData.relevancyScore
                        : userData.profileScore
                    )}
                    styles={{
                      path: {
                        stroke: "#DE8F6E",
                        strokeWidth: 8,
                        transformOrigin: "center center",
                      },
                      trail: {
                        stroke: "#2C2C34",
                        strokeWidth: 8,
                        transformOrigin: "center center",
                      },
                    }}
                  >
                    <div
                      style={{
                        fontSize: 45,
                        marginTop: "400px",
                        fontWeight: "500",
                      }}
                    >
                      <p>
                        {Math.round(
                          text === "candidate"
                            ? userData.relevancyScore
                            : userData.profileScore
                        )}{" "}
                        / 100
                      </p>
                    </div>
                  </CircularProgressbarWithChildren>
                </div>
              </div>
              <div className="flex justify-center">
                <hr
                  color="black"
                  style={{
                    marginTop: "15px",
                    fontWeight: "600",
                    width: "200px",
                    color: "black",
                  }}
                ></hr>
              </div>
              <p
                style={{ textAlign: "center", marginTop: "15px" }}
                className="text-muted text-[12px] ml-5 pl-5"
              >
                Best Interviewer for
              </p>
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
                className="ml-5 pl-5"
              >
                Flutter Developer
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
