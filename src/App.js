// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BasePage from './pages/BasePage';
import MainPage from './pages/MainPage';
import JournalEntry from './pages/JournalEntry';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <BasePage darkMode={darkMode} setDarkMode={setDarkMode}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/journal/:slug" element={<JournalEntry />} />
        </Routes>
      </BasePage>
    </BrowserRouter>
  );
}

export default App;
