import React, { useState } from "react";
import "../styles/Boxes.css";
import Button from "./Button.jsx";

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
}) => {
  // Arrays for suggestions
  const departments = [
    "Computer Science",
    "Mechanical",
    "Electrical",
    "Civil",
    "Aerospace",
  ];
  const expertise = [
    "AI",
    "Machine Learning",
    "Cybersecurity",
    "Game Development",
    "Web Development",
  ];

  // States for managing suggestions and input values
  const [departmentInput, setDepartmentInput] = useState("");
  const [expertiseInput, setExpertiseInput] = useState("");
  const [filteredDepartments, setFilteredDepartments] = useState([]);
  const [filteredExpertise, setFilteredExpertise] = useState([]);

  // Handlers for department input
  const handleDepartmentChange = (e) => {
    const value = e.target.value;
    setDepartmentInput(value);
    setFilteredDepartments(
      departments.filter((dept) =>
        dept.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  // Handlers for expertise input
  const handleExpertiseChange = (e) => {
    const value = e.target.value;
    setExpertiseInput(value);
    setFilteredExpertise(
      expertise.filter((exp) => exp.toLowerCase().includes(value.toLowerCase()))
    );
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
          <select
            value={selectedIIT}
            onChange={onIITChange}
            className="sort-dropdown"
          >
            <option value="all">All</option>
            <option value="IIT BOMBAY">IIT BOMBAY</option>
            <option value="IIT KANPUR">IIT KANPUR</option>
            <option value="IIT DELHI">IIT DELHI</option>
          </select>
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

      {/* Department Input with Suggestions */}


      {/* Expertise Input with Suggestions */}
      <div className="search-box">
        <span className="search-prefix">
          <i className="fas fa-search" style={{ fontSize: "16px" }}></i>
        </span>
        <div className="searchkk">
          <input
            type="text"
            placeholder="Expertise"
            value={expertiseInput}
            onChange={handleExpertiseChange}
          />
          {expertiseInput && (
            <ul className="suggestions">
              {filteredExpertise.map((exp, index) => (
                <li key={index} onClick={() => setExpertiseInput(exp)}>
                  {exp}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div style={{
        width: "150px"
      }}>
        <Button
          bgcolor="rgba(190, 190, 190, 1)"
          color="black"
          fontWeight="500"
          fontSize="14px"
          padding="3px 12px"
        >
          Submit
        </Button>
      </div>

      {children}
    </div>
  );
};

export default Boxes;
