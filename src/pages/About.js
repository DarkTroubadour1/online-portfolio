import React from 'react';
import './About.css'
import SelfPortrait from '../components/SelfPortrait'

function About() {
  return (
    <div id="about" className="aboutStyle">
      <div>
        <h2 className="section-header">me.</h2>
        <div className="aboutContentStyle">
          <SelfPortrait />
          <div>I have been a software engineer for 15 years</div>
        </div>
      </div>
    </div>
  );
}

export default About;
