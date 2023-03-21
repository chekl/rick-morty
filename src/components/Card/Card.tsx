import React from 'react';
import { Link } from 'react-router-dom';
import "./Card.scss"


export default function Card({character}:any) {
  let name:string = character.name;
  return (
    <Link to={`/${character.id}`} className="card card-position card-shadow card-font">
      <img className="card-img" src={character.image} alt={character.name}/>
      <h6 className="card-h">{name.length > 17 ? name.slice(0,18) + '...' : character.name}</h6>
      <p className="card-descr">{character.species}</p>
    </Link>
  );
}