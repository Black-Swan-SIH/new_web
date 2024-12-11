import React, { useState } from "react";
import "../styles/Nav2.css";
import Button from "./Button.jsx";
import proicon from "../assets/profile.png";
import addition from "../assets/addition.svg";
import { width } from "@mui/system";
import { useNavigate } from "react-router-dom";

function NavBar2() {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "light" : "dark"
    );
  };

  return (
    <header className="header">
      <b>RAC, DRDO</b>
      <div className="flex gap-3">
        <Button
        onClick={() => {
          navigate("/admin/dashboard");
        }}
          fontSize="16px"
          bgcolor="transparent"
          color="var(--text-color1)"
          fontWeight="600"
          hoverBorder={true}
          padding="0.3em 7px"
          borderRadius="12px"
          width={"110px"}
        >
          Dashboard
        </Button>
        <Button
          fontSize="16px"
          bgcolor="transparent"
          color="var(--text-color1)"
          fontWeight="600"
          hoverBorder={true}
          padding="0.3em 7px"
          borderRadius="12px"
          width={"110px"}
        >
          About
        </Button>
        <Button
          fontSize="16px"
          bgcolor="transparent"
          color="var(--text-color1)"
          fontWeight="600"
          hoverBorder={true}
          padding="0.3em 7px"
          borderRadius="12px"
          width={"110px"}
        >
          Contact
        </Button>
      </div>
      <div className="nav">
        <img
          src={proicon}
          alt="Profile Icon"
          style={{ borderRadius: "20%", width: "18px", height: "18px" }}
        />
        <div
          style={{
            width: "2px",
          }}
        ></div>
        <img
          src={addition}
          alt="Addition Icon"
          style={{ borderRadius: "25%", width: "20px", height: "20px" }}
        />
        <Button
          bgcolor="transparent"
          color="var(--text-color10)"
          fontWeight="600"
          fontSize="14px"
        >
          हिन्दी
        </Button>
        <div className="flex gap-2 items-center justify-center">
          <div className={`sun ${darkMode ? "dark" : "light"}`}>
            <i class="fa-solid fa-sun"></i>
          </div>
          <div>
            <label class="switch">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={toggleTheme}
              />
              <span class="slider round"></span>
            </label>
          </div>
          <div className={`moon ${darkMode ? "dark" : "light"}`}>
            <i class="fa-solid fa-moon"></i>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar2;
