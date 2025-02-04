// BasePage.js
import React from 'react';
import Header from '../components/Header';

function BasePage({ children, darkMode, setDarkMode }) {
  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        {children}
      <footer>
        <p>© 2025 Joel Gross. Some punny footer text here.</p>
      </footer>
    </>
  );
}

export default BasePage;
