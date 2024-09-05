import React from 'react';

function Nav({ setActiveSection }) {
  return (
    <nav style={navStyle}>
        <a href="#about" style={linkStyle} onClick={() => setActiveSection('about')}>about</a>
        <a href="#projects" style={linkStyle} onClick={() => setActiveSection('projects')}>projects</a>
        <a href="#articles" style={linkStyle} onClick={() => setActiveSection('articles')}>articles</a>
        <a href="#contact" style={linkStyle} onClick={() => setActiveSection('contact')}>contact</a>
    </nav>
  );
}

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#282828',
  padding: '10px',
};

const linkStyle = {
  color: '#ffffff',
  margin: '0 15px',
  textDecoration: 'none',
  fontWeight: 'bold',
};

export default Nav;
