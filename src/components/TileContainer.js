import React from 'react';
import Tile from './Tile';
import './TileContainer.css'; // You can define styles for the horizontal scroll here
import { Link } from 'react-router-dom';

function TileContainer({ tiles, routeFolder }) {
  return (
    <div className={`horizontal-scroll}`}>
      {tiles.map((tile, index) => (
        <Link key={`link-${routeFolder}-${index}`} to={`/${routeFolder}/${tile.slug}`}>
        <Tile
          key={index}
          title={tile.title}
          subtitle={tile.subtitle}
        />
        </Link>
      ))}
    </div>
  );
}

export default TileContainer;