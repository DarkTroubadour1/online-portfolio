import React from 'react';
import './Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1>
          Hello, I'm 
          <span className="highlight"> Joel</span>
        </h1>
        <p>
          Staff Software Engineer & Mentor
        </p>
        <p>
            <em>“I only pause for cappuccino and code reviews.”</em>
        </p>
        <button className="cta-button">Invite Me to Your Team</button>
      </div>
      <div className="hero-image">
        <img 
          src="https://via.placeholder.com/400x300/EEE/333?text=Elegance+Meets+Code" 
          alt="Hero Placeholder" 
        />
      </div>
    </section>
  );
}

export default Hero;
