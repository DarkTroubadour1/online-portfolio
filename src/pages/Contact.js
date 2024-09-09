import React from 'react';

function Contact() {
  return (
    <section id="contact" style={sectionStyle}>
      <h2 className="section-header">Contact</h2>
      <form style={formStyle}>
        <input type="text" name="name" placeholder="Your Name" style={inputStyle} required />
        <input type="email" name="email" placeholder="Your Email" style={inputStyle} required />
        <textarea name="message" rows="5" placeholder="Your Message" style={inputStyle} required></textarea>
        <input type="submit" value="Send Message" style={submitStyle} />
      </form>
    </section>
  );
}

const sectionStyle = {
  padding: '20px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '600px',
  margin: '0 auto',
};

const inputStyle = {
  padding: '10px',
  marginBottom: '10px',
  border: 'none',
  borderRadius: '5px',
  backgroundColor: '#333',
  color: '#ffffff',
};

const submitStyle = {
  backgroundColor: '#5a5a5a',
  cursor: 'pointer',
};

export default Contact;
