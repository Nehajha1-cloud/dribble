import React, { useState } from "react";
import "./Header.css";
import Search from './public/logo/search.png';

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Shots");
  const [navDropdownOpen, setNavDropdownOpen] = useState({
    explore: false,
    hire: false,
    mobile: false,
  });

  const options = ["Shots", "Designers", "Services"];
  const exploreOptions = ["Option 1", "Option 2", "Option 3"];
  const hireOptions = ["Option 1", "Option 2", "Option 3"];

  const toggleDropdown = (dropdown) => {
    setNavDropdownOpen((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  return (
    <header className="dribbble-header">
<div className="dribble">Dribble</div>

      <div className="header-center">
        <div className="search-box">
          <div className="search-container">
            <div
              className="search-dropdown"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {selectedOption} {" "}
              <span className={`arrow ${dropdownOpen ? "up" : "down"}`}></span>
            </div>

            <input
              type="text"
              placeholder="What are you looking for?"
              aria-label="Search"
            />
            <span className="search-icon">
              <img src={Search} alt="Search" />
            </span>

            {dropdownOpen && (
              <ul className="dropdown-menu">
                {options.map((opt) => (
                  <li
                    key={opt}
                    onClick={() => {
                      setSelectedOption(opt);
                      setDropdownOpen(false);
                    }}
                  >
                    {opt}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <div className="nav-item" onClick={() => toggleDropdown("explore")}>
            Explore
            <span className={`arrow ${dropdownOpen ? "up" : "down"}`}></span>
            {navDropdownOpen.explore && (
              <div className="dropdown-content">
                {exploreOptions.map((opt) => (
                  <a href="#" key={opt}>
                    {opt}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="nav-item" onClick={() => toggleDropdown("hire")}>
            Hire a Designer
            <span className={`arrow ${dropdownOpen ? "up" : "down"}`}></span>
            {navDropdownOpen.hire && (
              <div className="dropdown-content">
                {hireOptions.map((opt) => (
                  <a href="#" key={opt}>
                    {opt}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#">Find Jobs</a>
          <a href="#">Blog</a>
        </nav>
      </div>

      {/* Mobile Nav Menu */}
      {navDropdownOpen.mobile && (
        <nav className="mobile-nav">
          <a href="#">Explore</a>
          <a href="#">Hire a Designer</a>
          <a href="#">Find Jobs</a>
          <a href="#">Blog</a>
        </nav>
      )}

      <div className="header-right">
        <button className="signup-btn">Sign up</button>
        <button className="login-btn">Log in</button>
      </div>
    </header>
  );
}

export default Header;
