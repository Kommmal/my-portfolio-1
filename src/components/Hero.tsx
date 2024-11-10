import React from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import "../app/globals.css"
import Image from "next/image";
import TextChange from "./TextChange";

const Home = () => {
    return (
      <div className="home-container">
        <div className="home-text">
        <h1 className="home-title">
            Hi, I'm <br /> Komal Ayub
          </h1>
            <h5 className="home-subtitle" >
            I'm a <span className="highlight-text">
              <TextChange />
            </span>    
            </h5>
          <p className="home-description">
            A passionate and creative Frontend Developer with a focus on building visually stunning and user-friendly websites. With a deep understanding of HTML, CSS, JavaScript, and modern frontend frameworks like React.
          </p>
          <button className="home-button">
            Check Resume
          </button>
        </div>
        <div className="home-image">
        <Image
                src="/images/7358602-removebg-preview.png"  // Path to the image in the public folder
                alt="Your Name"
                width={500}          // Width of the image
                height={500}         // Height of the image
                className="profile-image" // Optional class for additional styling
        />
        </div>
      </div>
    );
  };
  
  export default Home;