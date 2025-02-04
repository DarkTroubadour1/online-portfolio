import React from 'react';

function Header({ darkMode, setDarkMode }) {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">Joel Ramsey Gross</div>
        <ul className="nav-links">
          <li><a href="/online-portfolio">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#tech-journals">Tech Journals</a></li>
        </ul>
        <button
          id="theme-toggle"
          aria-label="Toggle Theme"
          className="theme-toggle-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? '☀' : '☾'}
        </button>
      </nav>
    </header>
  );
}

export default Header;
