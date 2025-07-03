import React, { useState } from 'react';
import '../Styles/Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="nav-bar">
      <div className="logo">@<span>ekxhta</span></div>
      
      <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#Home">Home</a>
        <a href="#Skills">Skills</a>
        <a href="#Contact">Contact me</a>
        <a href="#Socials">Socials</a>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </div>
  );
}

export default Navbar;
