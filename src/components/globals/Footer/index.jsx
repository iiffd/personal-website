import React from 'react';
import Navbar from '../Navbar';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <small>© Samuel Hong</small>
        <Navbar navStyle='footer-nav'/>

      </div>
    </footer>
  );
}

export default Footer;
