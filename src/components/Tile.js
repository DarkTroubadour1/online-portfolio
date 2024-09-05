import React from 'react';
import './Tile.css';

function Tile({ title, altText }) {
  return (
    <div className="tile" title={altText}>
      <div className="tile-title">
        <span>{title}</span>
      </div>
    </div>
  );
}

export default Tile;
