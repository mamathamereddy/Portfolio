import React, { useState } from "react";
import logo from "../images/logo.png";
import { FaAlignRight } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <button type="button" className="nav-btn" onClick={handleToggle}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <a href="#home" data-nav-section="home">
              Home
            </a>
          </li>

          <li>
            <a href="#about" data-nav-section="about">
              About
            </a>
          </li>
          <li>
            <a href="#experience" data-nav-section="experience">
              Experience
            </a>
          </li>

          <li>
            <a href="#projects" data-nav-section="projects">
              Projects
            </a>
          </li>

          <li>
            <a href="#education" data-nav-section="education">
              Education
            </a>
          </li>
          <li>
            <a href="#skills" data-nav-section="skills">
              Skills
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
