import React from 'react';
import './SelfPortrait.css';
import me from '../assets/warm_1.jpg';

function SelfPortrait() {
  return (
    <div className="contentStyle">
        <img id="portraitImage" src={me} />
      </div>
  );
}

export default SelfPortrait;