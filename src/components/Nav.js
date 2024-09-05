import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Nav({ setActiveSection }) {
  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle} onClick={() => setActiveSection('about')}>about</Link>
      <Link to="/" style={linkStyle} onClick={() => setActiveSection('projects')}>projects</Link>
      <Link to="/" style={linkStyle} onClick={() => setActiveSection('articles')}>articles</Link>
      <Link to="/" style={linkStyle} onClick={() => setActiveSection('contact')}>contact</Link>
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
