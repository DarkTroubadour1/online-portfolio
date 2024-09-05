import React, { useState } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Projects from './Projects';
import ArticleList from './ArticleList';
import Contact from './Contact';
import About from './About';

function MainPage({ children, activeRoute }) {
  const [activeSection, setActiveSection] = useState('about'); // Default section

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'articles':
        return <ArticleList />;
      case 'contact':
        return <Contact />;
      default:
        return <Projects />;
    }
  };

  return (
    <div>
      <Header />
      <Nav setActiveSection={setActiveSection} />
      <main>
        {/* If children are passed (like Article), render it, otherwise renderSection */}
        {children || renderSection()} 
      </main>
    </div>
  );
}

export default MainPage;
