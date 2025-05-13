import React, { useState } from 'react';
import './Header.css';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const handleScroll = (event) => {
    event.preventDefault();
    setMenuOpen(prev => !prev);
    const targetId = event.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header id="header" className="header">
      <nav className="navbar">
        <div className="logo">
            <span>My Portfolio</span>
        </div>

        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={handleScroll}>About</a></li>
          <li><a href="#projects" onClick={handleScroll}>Projects</a></li>
          <li><a href="#contact" onClick={handleScroll}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
