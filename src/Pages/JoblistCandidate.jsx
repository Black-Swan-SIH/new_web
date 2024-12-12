import React, { useMemo, useRef } from "react";
import Navbar3 from '../components/Navbar3';
import { useEffect, useState } from 'react';
import Input from '../components/Input';
import axios from "axios";
import Button from '../components/Button';
import '../styles/dropDown.css';
import '../styles/joblist.css';

function JoblistCandidate({ setShowNavbar, height, jobIds }) {

  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("All");
  const [ageRange, setAgeRange] = useState("all");
  const searchInputRef = useRef(null);
  const [filteredTitles, setFilteredTitles] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

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

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setSortOption(option);
    setIsOpen(false);
    if (option === 'Oldest') {
      setSortOption('Oldest');
    }
    console.log(`Selected option: ${option}`);
  };

  const totalJobs = jobs.length;
  const openJobs = jobs.filter((job) => job.status === "open").length;
  const closedJobs = jobs.filter((job) => job.status === "closed").length;

  useEffect(() => {
    setShowNavbar(false);
    return () => {
      setShowNavbar(true);
    };
  }, [setShowNavbar]);

  const filteredJobs = useMemo(() => {
    let sortedJobs = [...jobs];
    if (sortOption === 'Oldest') {
      sortedJobs.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    } else {
      sortedJobs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    return sortedJobs.filter((job) => {
      const lowerCaseSearch = search.toLowerCase();
      return (
        job.title?.toLowerCase().includes(lowerCaseSearch) ||
        job.type?.toLowerCase().includes(lowerCaseSearch) ||
        job.department?.toLowerCase().includes(lowerCaseSearch) ||
        job.location?.toLowerCase().includes(lowerCaseSearch)
      );
    });
  }, [jobs, search, sortOption]);

  const handleSearchChange = (e) => {
    const input = e.target.value;
    setSearch(input);

    if (input) {
      const matches = jobs
        .filter((job) => job.title?.toLowerCase().startsWith(input.toLowerCase()))
        .map((job) => job.title);

      setFilteredTitles(matches);
      setShowDropdown(true);
    } else {
      setFilteredTitles([]);
      setShowDropdown(false);
    }
  };

  const handleTitleClick = (title) => {
    setSearch(title);
    setShowDropdown(false);
  };

  return (
    <>
      <div style={{ backgroundColor: "#FAFAFA", width: "1510px", height: "900px" }}>
        <Navbar3 />

        <div className="container">
          <div className="row mt-5 pl-5 ml-5 pt-5" style={{ marginTop: "45px" }}>
            <div className="col-md-5">
              <div className="row">
                <h1 style={{ fontSize: "60px", fontWeight: "550" }}>Jobs</h1>
              </div>
              <div className="row" style={{ display: "flex", marginTop: "10px", paddingLeft: "4px" }}>
                <div className="text-muted">
                  Jobs
                  <div style={{ border: "1px lightGrey solid", width: "140px" }}></div>
                  <div style={{ color: "black", fontSize: "30px", marginTop: "8px", fontWeight: "550" }}>{totalJobs}</div>
                </div>
                <div style={{ marginLeft: "70px" }} className='text-muted'>
                  Opened
                  <div style={{ border: "1px lightGrey solid", width: "140px" }}></div>
                  <div style={{ color: "black", fontSize: "30px", marginTop: "8px", fontWeight: "550" }}>{openJobs}</div>
                </div>
                <div style={{ marginLeft: "70px" }}>
                  Closed
                  <div style={{ border: "1px lightGrey solid", width: "140px" }}></div>
                  <div style={{ color: "black", fontSize: "30px", marginTop: "8px", fontWeight: "550" }}>{closedJobs}</div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div style={{ width: "500px", marginLeft: "150px", position: "relative" }}>
                <Input
                  placeholder="Search jobs"
                  value={search}
                  onChange={handleSearchChange}
                />
                {showDropdown && (
                  <div className="dropdown-menu" style={{ position: "absolute", top: "40px", zIndex: 1000, backgroundColor: "white", border: "1px solid lightgrey", borderRadius: "5px", width: "100%" }}>
                    {filteredTitles.length > 0 ? (
                      filteredTitles.map((title, index) => (
                        <div
                          key={index}
                          className="dropdown-item"
                          style={{ padding: "10px", cursor: "pointer" }}
                          onClick={() => handleTitleClick(title)}
                        >
                          {title}
                        </div>
                      ))
                    ) : (
                      <div className="dropdown-item" style={{ padding: "10px" }}>No matches found</div>
                    )}
                  </div>
                )}
              </div>

              <div style={{ display: "flex", marginTop: "10px" }}>
                <div className="search-container" style={{ width: "220px", marginLeft: "102px" }}>
                  <div className="search-input" style={{ height: "40px", width: "240px", marginLeft: "50px", display: "flex" }}>
                    <Input placeholder={sortOption} />
                    <div className="dropdown-container" style={{ marginLeft: "-45px", marginTop: "2px" }}>
                      <div className="dropdown-box" onClick={toggleDropdown}>
                        <div className="dropdown-arrow" style={{ marginLeft: "1px", marginTop: "5px" }}>&#9660;</div>
                      </div>
                      {isOpen && (
                        <div className="dropdown-options">
                          <div className="dropdown-option" onClick={() => handleOptionClick('Oldest')}>Oldest</div>
                          <div className="dropdown-option" onClick={() => handleOptionClick('Latest')}>Latest</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="search-container" style={{ width: "150px", marginRight: "240px" }}>
                  <div className="search-input" style={{ height: "40px", width: "100px", marginLeft: "35px" }}>
                    <Input placeholder="All" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Job Cards */}
          <div className="row mt-5 pt-5" style={{ display: "flex", flexWrap: "wrap" }}>
            {filteredJobs.map((job, index) => (
              <div
                key={index}
                style={{
                  marginRight: "35px",
                  width: "390px",
                  borderRadius: "10px",
                  marginTop: "10px",
                  backgroundColor: "white",
                  height: "380px"
                }}
              >
                <div className="ml-5 pl-2">
                  <Button
                    marginRight="10px"
                    bgcolor="lightGrey"
                    marginTop="15px"
                    width="70px"
                    height="20px"
                    borderRadius="20px"
                    color="black"
                    children={job.status || "opened"}
                  />
                  <h1 className="mt-5 pt-5" style={{ fontWeight: "550", fontSize: "16px" }}>
                    {job.title || "Job Title"}
                  </h1>
                  <div style={{ display: "flex", marginTop: "8px" }}>
                    <h1 className="mt-3 mr-5 pr-5" style={{ fontWeight: "500", fontSize: "13px" }}>
                      <span className='text-muted'>Type:</span> {job.type || "N/A"}
                    </h1>
                    <h1 className="mt-3" style={{ fontWeight: "500", fontSize: "13px" }}>
                      <span className='text-muted'>Department:</span> {job.department || "N/A"}
                    </h1>
                  </div>
                  <div style={{ display: "flex" }}>
                    <h1 className="mt-3 mr-3 pr-2" style={{ fontWeight: "500", fontSize: "13px" }}>
                      <span className='text-muted'>Location:</span> {job.location || "N/A"}
                    </h1>
                    <h1 className="mt-3" style={{ fontWeight: "500", fontSize: "13px" }}>
                      <span className='text-muted'>Location Type:</span> {job.locationType || "N/A"}
                    </h1>
                  </div>

                  <ul>
                    <li>
                      <div>
                        <div style={{
                          backgroundColor: "#9CAFB7",
                          height: "120px",
                          width: "350px",
                          borderRadius: "10px",
                          marginTop: "20px"
                        }}>
                          <h1 className='p-3' style={{ fontSize: "18px", fontWeight: "500" }}>Job Description</h1>
                          <p className='p-3'>{job.description || "No description available."}</p>
                        </div>
                      </div>
                      <div className="mt-5">
                        <div style={{
                          height: "140px",
                          width: "350px",
                          borderRadius: "10px",
                          marginTop: "20px"
                        }}>
                          <h1 className='p-3' style={{ fontSize: "18px", fontWeight: "500" }}>Skills Required</h1>
                          <p className='p-3'>
    {job.recommandedSkills
        ? job.recommandedSkills.map((skill) => (typeof skill === "string" ? skill : skill.name)).join(", ")
        : "No skills mentioned."}
</p>



                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default JoblistCandidate;
