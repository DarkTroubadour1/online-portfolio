import React from 'react';

function Header() {
  return (
    <div>
    <header style={headerStyle}>
        <h1>Joel Ramsey Gross</h1>
        <p>Staff Software Engineer - Senior Software Architect | Project Manager | Mentor</p>
    </header>
    </div>
  );
}

const headerStyle = {
  backgroundColor: '#1f1f1f',
  color: '#ffffff',
  padding: '20px',
  textAlign: 'center',
};

export default Header;
