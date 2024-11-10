import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import "../app/globals.css" // Import the custom CSS file

const Footer = () => {
  return (
    <footer id="Footer">
      <div>
        <h1 className="footer-heading">Komal Ayub</h1>
      </div>
      <ul className="footer-nav">
        <li className="footer-link">Home</li>
        <li className="footer-link">About</li>
        <li className="footer-link">Skills</li>
        <li className="footer-link">Projects</li>
        <li className="footer-link">Contact</li>
      </ul>
      <ul className="footer-social-links">
        <li className="footer-social-item">
          <MdOutlineEmail size={24} className="social-icon" />
          <a href="" className="social-link">Email</a>
        </li>
        <li className="footer-social-item">
          <CiLinkedin size={24} className="social-icon" />
          <a href="" className="social-link">LinkedIn</a>
        </li>
        <li className="footer-social-item">
          <FaGithub size={24} className="social-icon" />
          <a href="https://github.com/Kommmal" target="_blank" className="social-link">GitHub</a>
        </li>
      </ul>
      <p className="footer-copy">
        &copy; 2023 Komal Ayub. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
