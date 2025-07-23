import React from 'react';
import Overview from '../components/Overview';
import Reflection from '../components/Reflection';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="section-box">
          <Overview />
        </div>
        <div className="section-box">
          <Reflection />
        </div>
      </div>
    </div>
  );
}

export default About;
