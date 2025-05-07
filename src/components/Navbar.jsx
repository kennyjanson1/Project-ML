import React, { useState, useRef, useEffect } from "react";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import TutorialPopup from "./Tutorial";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const openModal = () => {
    setShowModal(true);
    setMenuOpen(false);
  };
  const closeModal = () => setShowModal(false);

  const handleScrollToFAQ = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    const faqSection = document.getElementById("faq");
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img src="/Logo.jpg" alt="Logo" className="navbar-logo" />
          <span className="navbar-name">ip0LO</span>
        </div>

        <div className="navbar-menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`navbar-dropdown ${isMenuOpen ? "open" : ""}`} ref={dropdownRef}>
          <li><div className="dropdown-divider"></div></li>
          <li>
            <a href="#how" onClick={(e) => { e.preventDefault(); openModal(); }} className="nav-link">
              How to use it?
            </a>
          </li>
          <li><a href="#mission" onClick={toggleMenu}>Mission</a></li>
          <li><a href="#credit-section" onClick={toggleMenu}>About us</a></li>
          <li><a href="#faq" onClick={handleScrollToFAQ}>FAQ</a></li>
        </ul>
      </nav>

      {showModal && <TutorialPopup onClose={closeModal} />}
    </>
  );
};

export default Navbar;
