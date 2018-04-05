import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="projects.html">Projects</a></li>
        </ul>
    </nav>
  );
}

export default Navbar;
