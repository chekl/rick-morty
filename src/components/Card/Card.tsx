import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({character}:any) {
  return (
    <Link to={`/${character.id}`}>
    <div>
      <img src={character.image} alt={character.name}/>
      <h6>{character.name}</h6>
      <p>{character.species}</p>
    </div>
    </Link>
  );
}