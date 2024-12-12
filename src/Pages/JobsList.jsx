import React, { useEffect, useMemo, useRef, useState } from "react";
import "../styles/JobsList.css";
import node from "../assets/node.jpg";
import Heading from "../components/Heading.jsx";
import Itemcount from "../components/Itemcount.jsx";
import Boxes from "../components/Boxes.jsx";
import Button from "../components/Button.jsx";
import axios from "axios";
import Cards from "../components/Card.jsx";
import TimeDifference from "../TimeDifference.jsx";
import { useNavigate } from "react-router-dom";

const JobsList = ({ head }) => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [ageRange, setAgeRange] = useState("all");
  const searchInputRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const userToken = localStorage.getItem("userToken");
      try {
        const response = await axios.get(
          "https://lobster-app-b66lv.ondigitalocean.app/subject",
          {
            headers: {
              Authorization: `Bearer ${userToken}`, // Add the token to the Authorization header
            },
            withCredentials: true, // Include credentials if needed
          }
        );

        const data = response.data;
        console.log(data.data.subjects);
        setJobs(data.data.subjects);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const currentYear = new Date().getFullYear();

  const filteredAndSortedJobs = useMemo(() => {
    return jobs
      .filter((job) => job.title.toLowerCase().includes(search.toLowerCase())) // Search filter
      .filter((job) => {
        if (ageRange === "all") return true;
        const age = currentYear - job.age; // Assuming `age` exists in the job data
        if (ageRange === "18-20") return age >= 18 && age <= 20;
        if (ageRange === "21-30") return age >= 21 && age <= 30;
        if (ageRange === "31-40") return age >= 31 && age <= 40;
        return true;
      })
      .sort((a, b) => {
        if (sortOption === "time-asc")
          return new Date(a.createdAt) - new Date(b.createdAt);
        if (sortOption === "time-desc")
          return new Date(b.createdAt) - new Date(a.createdAt);
        return 0;
      });
  }, [jobs, search, ageRange, sortOption]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        searchInputRef.current.focus();
        searchInputRef.current.select();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const totalJobs = jobs.length;
  const openJobs = jobs.filter((job) => job.status === "open").length;
  const closedJobs = jobs.filter((job) => job.status === "closed").length;
  return (
    <div className="contuser">
      <div className="headuser flex">
        <div>
          <Heading fontSize="40px" fontWeight="600" color="var(--text-color9)">
            {head}
          </Heading>
          <div className="itemsuser">
            <Itemcount head="Jobs" value={totalJobs} />
            <Itemcount head="Opened" value={openJobs} />
            <Itemcount head="Closed" value={closedJobs} />
          </div>
        </div>
        <div>
          <Boxes
            searchValue={search}
            onSearchChange={(e) => setSearch(e.target.value)}
            sortOption={sortOption}
            onSortChange={(e) => setSortOption(e.target.value)}
            ageRange={ageRange}
            onAgeChange={(e) => setAgeRange(e.target.value)}
            searchInputRef={searchInputRef}
            handleFocus={() => searchInputRef.current.focus()}
          />
        </div>
      </div>
      <div className="my-10 botuser">
        <div className="recuser mb-5">
          <Heading color="var(--text-color12)" fontSize="20px" fontWeight="600">
            Recent job openings
          </Heading>
          <div className="py-1"></div>
          {filteredAndSortedJobs.slice(0, 2).map((job, index) => (
            <Cards
              key={index}
              imageSrc={job.imageSrc || node}
              backgColor="rgba(142, 183, 168, 1)"
              jobs={job.title}
              applications={job.applications?.length || 0}
              open={<TimeDifference timestamp={job.createdAt} />}
            />
          ))}
          <div className="py-5"></div>
          <div className="flex gap-10">
            <Button
              bgcolor="rgba(0,0,0,1)"
              color="white"
              fontSize="14px"
              borderRadius="10px"
              padding="7px 23px"
            >
              New Job
            </Button>
            <Button
              bgcolor="rgba(222, 143, 110, 1)"
              color="black"
              fontSize="14px"
              borderRadius="10px"
              padding="7px 23px"
            >
              Close a Job
            </Button>
          </div>
        </div>
        <div className="my-[40px] w-[0.8px] h-[255px] bg-gray-400"></div>
        <div className="">
          <Heading color="var(--text-color12)" fontSize="20px" fontWeight="600">
            All Jobs
          </Heading>
          <div className="flex flex-col py-5 gap-3">
            {filteredAndSortedJobs.map((job, index) => (
              <Cards
                key={index}
                imageSrc={job.imageSrc || node}
                backgColor="rgba(142, 183, 168, 1)"
                jobs={job.title}
                applications={job.applications?.length || 0}
                open={<TimeDifference timestamp={job.createdAt} />}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsList;
