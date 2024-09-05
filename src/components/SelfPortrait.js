import React from 'react';
import './SelfPortrait.css';
import me from '../assets/warm_1.jpg';

function SelfPortrait() {
  return (
    <div className="portrait">
        <img id="portraitImage" src={me} alt="" />
      </div>
  );
}

export default SelfPortrait;