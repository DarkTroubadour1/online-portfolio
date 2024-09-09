import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';

function MainPage({ children }) {
  return (
    <div>
      <Header />
      <Nav />
      <main>
        {/* Render the children passed by the Router */}
        {children}
      </main>
    </div>
  );
}

export default MainPage;
