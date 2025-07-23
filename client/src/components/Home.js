import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../images/profileImage.png'
import './Home.css';

function Home() {
  return (

    <div className="home-container">
      <div className="home-text-section">
        <h1 className="gradient-text">Hey! I am Melissa YEFSAH </h1>
        <h2 style={{paddingLeft:'60px'} }>Support Engineer Apprentice </h2>
        <p className="description">
        &nbsp;&nbsp;&nbsp;&nbsp;
        I joined Clover/Fiserv as a Support Engineer Apprentice,
         where I gained hands-on experience in debugging, coding, and automation.
          I’ve learned to troubleshoot complex issues, write clean and efficient code, 
          and streamline processes through automation tools. This role deepened my passion for problem-solving .<br/>
          I’m excited to keep growing as a developer and use what I’ve learned to build impactful, user-focused solutions .
        </p>
        <div className="buttons">
            <Link to="/about" className="learn-btn">
              LEARN MORE
            </Link>
            <Link to="/contact" className="hire-btn">
              Let's Talk
            </Link>
        </div>
      </div>
      <div className="profile-img">
        <img src={profileImage} alt="Profile" />
      </div>
    </div>
    
  );
}

export default Home;
