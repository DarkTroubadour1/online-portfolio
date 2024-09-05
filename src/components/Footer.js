import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 Your Name. All rights reserved.</p>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#1f1f1f',
  color: '#ffffff',
  textAlign: 'center',
  padding: '10px',
  marginTop: '20px',
};

export default Footer;
