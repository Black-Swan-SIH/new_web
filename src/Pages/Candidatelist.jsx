import React, { useEffect, useRef, useState } from "react";
import "../styles/Candidatelist.css";
import node from "../assets/node.jpg";
import Heading from "../components/Heading.jsx";
import Itemcount from "../components/Itemcount.jsx";
import Userlist from "../components/Userlist.jsx";
import formatNumber from "../components/FormatNumber.jsx";
import Boxes from "../components/Boxes.jsx";
import { handleFocus } from "../components/Functions.jsx";
import Panel from "../components/Panel.jsx";
import axios from "axios";
import URL from "../URL.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";

const Candidatelist = ({ head, page }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state?.userId;
  const currentYear = new Date().getFullYear();
  const [fetchedData, setFetchedData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [ageRange, setAgeRange] = useState("all");
  const [selectedIIT, setSelectedIIT] = useState("all");
  const [expertIds, setExpertIds] = useState([]);
  const [selectedNames, setSelectedNames] = useState([]);
  const [panelData, setPanelData] = useState([]);

  const searchInputRef = useRef(null);
  // Keyboard Shortcut for Search Focus
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

  // Fetch Data
  useEffect(() => {
    const fetchData = async () => {
      let endpoint = "";
      let list = "";
      if (page === "Candidatelist") {
        endpoint = "candidate";
        list = "candidates";
      } else if (page === "Panel") {
        endpoint = "expert";
        list = "experts";
      } else if (page === "Expertlist") {
        endpoint = "expert";
        list = "experts";
      }

      try {
        const userToken = localStorage.getItem("userToken");
        const response = await axios.get(`${URL}${endpoint}`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
          withCredentials: true,
        });
        console.log(response.data.data[list]);
        setFetchedData(response.data.data[list]);
        setSortedData(response.data.data.experts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page]);

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

  // Filter and Sort Data
  const filteredData = fetchedData
    .filter((person) =>
      `${person?.name}`.toLowerCase().includes(search.toLowerCase())
    )
    .filter((person) => {
      if (ageRange === "all") return true;
      const age = currentYear - person.age;
      if (ageRange === "18-20") return age >= 18 && age <= 20;
      if (ageRange === "21-30") return age >= 21 && age <= 30;
      if (ageRange === "31-40") return age >= 31 && age <= 40;
      return true;
    })
    .filter((person) => {
      if (selectedIIT === "all") return true;
      return person.institution?.toLowerCase() === selectedIIT.toLowerCase();
    });

  const sortFilteredData = filteredData.sort((a, b) => {
    if (sortOption === "name") {
      return `${a?.first_name} ${a?.last_name}`.localeCompare(
        `${b?.first_name} ${b?.last_name}`
      );
    }
    if (sortOption === "time-asc") {
      const timeA = new Date(`1970-01-01T${a.time}Z`);
      const timeB = new Date(`1970-01-01T${b.time}Z`);
      return timeA - timeB;
    }
    if (sortOption === "time-desc") {
      const timeA = new Date(`1970-01-01T${a.time}Z`);
      const timeB = new Date(`1970-01-01T${b.time}Z`);
      return timeB - timeA;
    }
    return 0;
  });
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const handleCheckboxChange = (id, isChecked) => {
    console.log(id, isChecked);
    setExpertIds((prevSelectedIds) => {
      if (isChecked) {
        return [...prevSelectedIds, id];
      } else {
        return prevSelectedIds.filter((selectedId) => selectedId !== id);
      }
    });
  };

  const handleSubmit = async () => {
    try {
      const userToken = localStorage.getItem("userToken");
      console.log(expertIds);
      await axios.post(
        `${URL}candidate/${userId}/panel`,
        { expertIds },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
          withCredentials: true,
        }
      );
      navigate(`/candidate/${userId}`, { state: { expertIds } });
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Error submitting data.");
    }
  };

  const renderContent = () => {
    if (page === "Candidatelist") {
      return sortFilteredData.map((person) => (
        <Userlist
          key={person?.id}
          id={person._id}
          text="candidate"
          imageSrc={node}
          name={person?.name}
          age={calculateAge(person.dateOfBirth)}
          work={person?.currentPosition}
          value={Math.round(person?.RelevancyScore)}
        />
      ));
    } else if (page === "Expertlist") {
      return sortFilteredData.map((person) => (
        <Userlist
          key={person?.id}
          id={person._id}
          text="expert"
          imageSrc={node}
          name={person?.name}
          age={calculateAge(person.dateOfBirth)}
          work={person?.currentPosition}
          value={Math.round(person?.averageRelevancyScore)}
        />
      ));
    } else if (page === "Panel") {
      return (panelData.length > 0 ? panelData : sortFilteredData).map((person) => (
        <Panel
          key={person?.expertId || person?.id}
          expertise={person?.expertise}
          id={person.expertId || person._id}
          text="expert"
          name={person?.name}
          profileScore={Math.round(person?.profileScore || person?.averageProfileScore) || 0}
          reviews={person?.reviews || person?.averageFeedbackScore || 0}
          experience="Beginner"
          department={person?.department}
          onCheckBoxChange={handleCheckboxChange}
          profileLink={person?.profileLink}
        />
      ));
    }
  };

  const total = fetchedData.length;
  const maleCount = fetchedData.filter(
    (user) => user?.gender === "male"
  ).length;
  const femaleCount = fetchedData.filter(
    (user) => user?.gender === "female"
  ).length;

  return (
    <div className="cont" style={{backgroundColor:"white"}}>
      <div className="head">
        <Heading fontSize="40px" fontWeight="600" color="var(--text-color9)">
          {head}
        </Heading>
        <div className="items">
          <Itemcount head="Total Experts" value={formatNumber(total)} />
          <Itemcount head="Male" value={formatNumber(maleCount)} />
          <Itemcount head="Female" value={formatNumber(femaleCount)} />
        </div>
      </div>
      <Boxes
        searchValue={search}
        onSearchChange={(e) => setSearch(e.target.value)}
        sortOption={sortOption}
        onSortChange={(e) => setSortOption(e.target.value)}
        ageRange={ageRange}
        onAgeChange={(e) => setAgeRange(e.target.value)}
        searchInputRef={searchInputRef}
        handleFocus={handleFocus}
        page={page}
        selectedIIT={selectedIIT}
        onIITChange={(e) => setSelectedIIT(e.target.value)}
        onDataFetched={setPanelData}
      />
      <div className="my-[40px] w-[60%] h-[0.8px] bg-gray-400"></div>
      <div className="scrollable-container">
        <div
          className={
            page === "Candidatelist" || page === "Expertlist"
              ? "person-list"
              : "panel-list"
          }
        >
          {renderContent()}
        </div>
      </div>
      {page === "Panel" && (
        <Button
          onClick={handleSubmit}
          bgcolor="var(--bg-color2)"
          color="var(--text-color22)"
          fontWeight="500"
          fontSize="14px"
          borderRadius="8px"
          padding="7px 12px"
        >
          Submit
        </Button>
      )}
    </div>
  );
};

export default Candidatelist;
