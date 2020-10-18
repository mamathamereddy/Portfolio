// import React from "react";
// import { FaAlignJustify } from "react-icons/fa";
// const Nav = () => {
//   const [state, setState] = React.useState(true);
//   return (
//     <nav className="navbar">
//       <div className="container">
//         <div className="navbar__container">
//           <ul className="navbar__left">
//             <div className="navbar__left-logo">
//               <img src="/images/logo.png" alt="logo" />
//             </div>
//           </ul>
//           {state ? (
//             <ul className="navbar__right">
//               <li>
//                 <a href="#home" data-nav-section="home">
//                   Home
//                 </a>
//               </li>

//               <li>
//                 <a href="#about" data-nav-section="about">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="#skills" data-nav-section="skills">
//                   Skills
//                 </a>
//               </li>
//               <li>
//                 <a href="#projects" data-nav-section="projects">
//                   Projects
//                 </a>
//               </li>
//               <li>
//                 <a href="#experience" data-nav-section="experience">
//                   Experience
//                 </a>
//               </li>
//               <li>
//                 <a href="#education" data-nav-section="education">
//                   Education
//                 </a>
//               </li>
//             </ul>
//           ) : (
//             ""
//           )}
//         </div>
//       </div>
//       <div className="toggle" onClick={() => setState(!state)}>
//         <FaAlignJustify />
//       </div>
//     </nav>
//   );
// };

// export default Nav;

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
          <a href to="#home">
            <img src={logo} alt="profile pic" />
          </a>
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
            <a href="#skills" data-nav-section="skills">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" data-nav-section="projects">
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" data-nav-section="experience">
              Experience
            </a>
          </li>
          <li>
            <a href="#education" data-nav-section="education">
              Education
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
