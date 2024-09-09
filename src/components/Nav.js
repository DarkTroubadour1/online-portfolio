import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Nav() {
  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>about</Link>
      <Link to="/projects" style={linkStyle}>projects</Link>
      <Link to="/articles" style={linkStyle}>articles</Link>
      <Link to="/contact" style={linkStyle}>contact</Link>
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
