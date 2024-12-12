import React, { useEffect, useMemo, useState } from "react";
import Heading from "../components/Heading.jsx";
import "../styles/Dashboard.css";
import CandidateCount from "../components/CandidateCount.jsx";
import formatNumber from "../components/FormatNumber.jsx";
import TopExperts from "../components/TopExperts.jsx";
import node from "../assets/node.jpg";
import Button from "../components/Button.jsx";
import { FaGreaterThan } from "react-icons/fa";
import axios from "axios";
import TimeDifference from "../TimeDifference.jsx";
import Cards from "../components/Card.jsx";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();

  const [total, setTotal] = useState(0);
  const [experts, setExperts] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userToken = localStorage.getItem("userToken");

      try {
        const response1 = await axios.get(
          "https://lobster-app-b66lv.ondigitalocean.app/candidate",
          {
            headers: {
              Authorization: `Bearer ${userToken}`, // Add the token to the Authorization header
            },
            withCredentials: true, // Include credentials if needed
          }
        );

        const response2 = await axios.get(
          "https://lobster-app-b66lv.ondigitalocean.app/expert",
          {
            headers: {
              Authorization: `Bearer ${userToken}`, // Add the token to the Authorization header
            },
            withCredentials: true, // Include credentials if needed
          }
        );

        const response3 = await axios.get(
          "https://lobster-app-b66lv.ondigitalocean.app/subject",
          {
            headers: {
              Authorization: `Bearer ${userToken}`, // Add the token to the Authorization header
            },
            withCredentials: true, // Include credentials if needed
          }
        );

        const data1 = response1.data;
        // console.log(data1);
        setTotal(data1.data.candidates.length);

        const data2 = response2.data;
        // console.log(data2);
        setExperts(data2.data.experts);

        const data3 = response3.data;
        console.log(data3.data.subjects[0]);
        setJobs(data3.data.subjects);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const displayedExperts = useMemo(() => experts.slice(0, 3), [experts]);
  const displayedJobs = useMemo(
    () => (Array.isArray(jobs) ? jobs.slice(0, 2) : []),
    [jobs]
  );

  return (
    <div className="dash">
      <div className="dashboard">
        <div className="first-column">
          <Heading fontSize="40px" fontWeight="600" color="var(--text-color9)">
            Dashboard
          </Heading>
          <div className="items">
            <CandidateCount head="Candidates" value={formatNumber(total)} />
            <CandidateCount
              head="Experts"
              value={formatNumber(experts.length)}
            />
            <CandidateCount
              head="Job Openings"
              value={formatNumber(jobs.length)}
            />
          </div>
          <div className="mt-[25px] mb-[20px]">
            <Heading
              fontSize="20px"
              fontWeight="600"
              color="var(--text-color12)"
            >
              Top Experts
            </Heading>
          </div>
          <div className="ex">
            <div>
              {displayedExperts.map((expert, index) => (
                <TopExperts
                  key={index}
                  imageSrc={expert.imageSrc ? expert.imageSrc : node}
                  name={expert.name}
                  expert={expert.currentPosition}
                  score={Math.round(expert.averageProfileScore * 100) / 100}
                />
              ))}
              {experts.length > 3 && (
                <div className="py-5">
                  <Button
                    onClick={() => {
                      navigate("/admin/list/experts");
                    }}
                    color="var(--text-color14)"
                    bgcolor="transparent"
                    padding="2px"
                    fontSize="12px"
                    fontWeight="500"
                    icon={
                      <FaGreaterThan
                        style={{ color: "black", fontSize: "10px" }}
                      />
                    }
                  >
                    View more
                  </Button>
                </div>
              )}
            </div>
            <div className="mx-[100px] w-0.5 h-60 bg-gray-500"></div>
          </div>
        </div>
        <div className="second-column">
          <div className="sfirst">
            <Heading
              color="var(--text-color13)"
              fontSize="13px"
              fontWeight="500"
            >
              "Either I will come back after hoisting the Tricolor, or I will
              come back wrapped in it, but I will be back for sure."
            </Heading>
            <Heading
              color="var(--text-color2)"
              fontSize="14px"
              fontWeight="600"
            >
              ~ Captain Vikram Batra, Param Vir Chakra
            </Heading>
          </div>
          <div className="rec ">
            <Heading
              color="var(--text-color12)"
              fontSize="20px"
              fontWeight="600"
            >
              Recent job openings
            </Heading>
            {displayedJobs.map((job, index) => (
              <Cards
                key={index}
                imageSrc={job.imageSrc ? job.imageSrc : node}
                backgColor="rgba(142, 183, 168, 1)"
                jobs={job.title}
                open={<TimeDifference timestamp={job.createdAt} />}
              />
            ))}
            {jobs.length > 2 && (
              <div className="py-5">
                <Button
                  onClick={() => {
                    navigate("/form");
                  }}
                  bgcolor="var(--bg-color2)"
                  padding="14px 5px"
                  fontSize="14px"
                  fontWeight="600"
                  color="var(--text-color22)"
                  width="170px"
                  borderRadius="8px"
                >
                  Add an expert
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="controlcenter">
        <Heading fontSize="21px" fontWeight="600" color="var(--text-color12)">
          Control Center
        </Heading>
        <div className="flex gap-10">
          <Button
          onClick={() => {
            navigate("/admin/list/experts");
          }}
            bgcolor="rgba(222, 143, 110, 1)"
            padding="18px"
            fontSize="14px"
            fontWeight="600"
            color="var(--text-color7)"
            width="170px"
            borderRadius="8px"
          >
            View all experts
          </Button>
          <Button
          onClick={() => {
            navigate("/admin/list/candidates");
          }}
            bgcolor="rgba(156, 175, 183, 1)"
            padding="18px"
            fontSize="14px"
            fontWeight="600"
            color="var(--text-color7)"
            width="170px"
            borderRadius="8px"
          >
            View all candidates
          </Button>
          <Button
          onClick={() => {
            navigate("/list/job");
          }}
            bgcolor="rgba(115, 167, 160, 1)"
            padding="18px"
            fontSize="14px"
            fontWeight="600"
            color="var(--text-color7)"
            width="170px"
            borderRadius="8px"
          >
            View all job openings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
