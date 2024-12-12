import React from "react";
import "../styles/Boxes.css";
import Button from "./Button.jsx";

const Boxes = ({ children, searchValue, onSearchChange, sortOption, onSortChange, ageRange, onAgeChange, searchInputRef, handleFocus,page,selectedIIT,onIITChange }) => {
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
      {children}
    </div>
  );
};

export default Boxes;
