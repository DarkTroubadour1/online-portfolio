import React from 'react';
import './About.css'
import SelfPortrait from '../components/SelfPortrait'

function About() {
  return (
    <section id="about" style={sectionStyle}>
      <h2 style={sectionTitle}>me.</h2>
      <SelfPortrait />
      <div>I have been a software engineer for 15 years</div>
    </section>
  );
}

const sectionStyle = {
  padding: '20px',
};

const sectionTitle = {
  fontSize: '2em',
  marginBottom: '20px',
  borderBottom: '2px solid #333',
  paddingBottom: '10px',
};

export default About;
