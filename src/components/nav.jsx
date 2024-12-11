import React, { useState } from "react";
import "../styles/nav.css";
import Button from "./Button";

function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

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
      <div className="nav">
      <Button bgcolor="transparent" color="var(--text-color10)" fontWeight="600" fontSize="15px">हिन्दी</Button>
      <div className="flex gap-2">
          <div className={`sun ${darkMode ? 'dark' : 'light'}`}>
            <i class="fa-solid fa-sun"></i>
          </div>
          <div>
            <label class="switch">
              <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
              <span class="slider round"></span>
            </label>
          </div>
          <div className={`moon ${darkMode ? 'dark' : 'light'}`}>
            <i class="fa-solid fa-moon"></i>
          </div>
        </div>
        <Button bgcolor="var(--bg-color2)" color="var(--text-color22)" fontWeight="600" fontSize="14px" padding="7px 20px" borderRadius="6px">Login</Button>
      </div>
    </header>
  );
}

export default NavBar;
