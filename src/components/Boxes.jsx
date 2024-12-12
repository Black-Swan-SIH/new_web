import React, { useState } from "react";
import "../styles/Boxes.css";
import Button from "./Button.jsx";
import Input from "./Input.jsx";
import axios from "axios";
import Data from "../Data.jsx";

const Boxes = ({
  children,
  searchValue,
  onSearchChange,
  sortOption,
  onSortChange,
  ageRange,
  onAgeChange,
  searchInputRef,
  handleFocus,
  page,
  selectedIIT,
  onIITChange,
  onDataFetched,
}) => {
  const [selectedValue, setSelectedValue] = useState(selectedIIT);
  const [domainInput, setDomainInput] = useState("");
  const[expertiseInput,setExpertiseInput]=useState("");
  const[expertiseArray,setExpertiseArray]=useState([]);

  const handleIITChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    onIITChange(event); // Call the parent handler to update the parent state
  };

  const handleDomainChange = (event) => {
    const value = event.target.value;
    setDomainInput(value);
  };

  const handleExpertiseChange = (event) => {
    const value = event.target.value;
    setExpertiseInput(value);
    const expertise = value.split(',').map(exp => exp.trim());
    setExpertiseArray(expertise);
  };

  // const handleSubmit = async () => {
  //   try {
  //     const userToken = localStorage.getItem("userToken");
  //     const response = await axios.post(
  //       'https://lobster-app-b66lv.ondigitalocean.app/extraexperts/giveme',
  //       {
  //         college: selectedValue,
  //         domain: domainInput,
  //         expertise: expertiseArray,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${userToken}`,
  //         },
  //         withCredentials: true,
  //       }
  //     );
  //     console.log('Data submitted successfully:', response.data.data);
  //     onDataFetched(response.data.data);
  //   } catch (error) {
  //     console.error('Error submitting data:', error);
  //   }
  // };

  const handleSubmit = () => {
    onDataFetched(Data);
  };

  return (
    <div className="boxes">
      <div className="search-box">
        <span className="search-prefix">
          <i className="fas fa-search" style={{ fontSize: "16px" }}></i>
        </span>
        <div className="searchkk">
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={onSearchChange}
            onFocus={handleFocus}
          />
          <Button
            bgcolor="rgba(190, 190, 190, 1)"
            color="black"
            fontWeight="500"
            fontSize="14px"
            padding="3px 12px"
          >
            Ctrl+K
          </Button>
        </div>
      </div>
      <div className="sorting">
        <select
          value={sortOption}
          onChange={onSortChange}
          className="sort-dropdown"
        >
          <option value="">Sort By</option>
          <option value="time-asc">Newest</option>
          <option value="time-desc">Oldest</option>
        </select>
        {page === "Panel" ? (
          <div className="flex">
            <select
              value={selectedIIT}
              onChange={handleIITChange}
              className="sort-dropdown"
            >
              <option value="All">All</option>
              <option value="IIT Bombay">IIT BOMBAY</option>
              <option value="IIT Kanpur">IIT KANPUR</option>
              <option value="IIT Delhi">IIT DELHI</option>
              <option value="TIET">TIET</option>
            </select>
            <Input
              type="text"
              placeholder="Domain"
              value={domainInput}
              onChange={handleDomainChange}
            />
            <Input
              type="text"
              placeholder="Expertise"
              value={expertiseInput}
              onChange={handleExpertiseChange}
            />
          </div>
        ) : (
          <select
            value={ageRange}
            onChange={onAgeChange}
            className="sort-dropdown-all"
          >
            <option value="all">All</option>
            <option value="18-20">18-20</option>
            <option value="21-30">21-30</option>
            <option value="31-40">31-40</option>
          </select>
        )}
      </div>
      <Button onClick={handleSubmit} bgcolor="blue" color="white" fontWeight="500" fontSize="14px" padding="10px 20px">
        Submit
      </Button>
      {children}
    </div>
  );
};

export default Boxes;
