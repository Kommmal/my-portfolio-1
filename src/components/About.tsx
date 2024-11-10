import React from "react";
import { IoArrowForward } from "react-icons/io5";
import "../app/globals.css"
import Image from "next/image";

const About = () => {
  return (
    <div id="About" className="about-container">
      <div className="about-section">
        <h2 className="about-title">About</h2>
        <div className="about-content">
        <img src="/images/7358653-removebg-preview.png" alt="" />
          <ul className="about-description">
            <div className="about-item">
              <IoArrowForward size={30} className="about-icon" />
              <span className="about-text">
                <h1 className="about-role">Frontend Developer</h1>
                <p className="about-paragraph">
                  As a beginner Frontend Developer, I am passionate about learning and building my skills to create user-friendly and visually appealing web applications. I’m gaining hands-on experience with HTML, CSS, and JavaScript, and I’m exploring modern frameworks like React to expand my knowledge. My goal is to craft responsive and accessible websites that provide a seamless user experience. I’m always excited to take on new challenges and continuously improve my coding skills while staying up to date with the latest industry trends and best practices.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
