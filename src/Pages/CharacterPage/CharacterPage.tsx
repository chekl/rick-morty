import React from 'react'
import { useParams } from 'react-router-dom';

import InfoItem from '../../components/InfoItem/InfoItem';
import { useSelector } from 'react-redux';
import { selectById } from '../../store/characters';

import LinkBack from '../../components/LinkBack/LinkBack';
import './CharacterPage.scss'

type Props = { 
      image: string,
  name: string,
  gender: string,
  status: string,
  species: string,
  origin: {
    name:string, 
  }, 
  type: string

}

export default function CharacterPage() {  
  let { id } = useParams();
  
  const character: Props = useSelector(state => selectById(state, id || "0"));

  
  return (
    <>
    <LinkBack/>
    <div className='character-container'>
      <img className="character-img"src={character.image} alt={character.name}/>
      <h2 className="character-name">{character.name}</h2>
      <p className='character-info'>Information</p>
    </div>
    <div className='character-info-container'>
<InfoItem option={'Gender'} value={character.gender}/>
      <InfoItem option={"Status"} value={character.status}/>
      <InfoItem option={"Specie"} value={character.species}/>
      <InfoItem option={"Origin"} value={character.origin.name}/>
      <InfoItem option={"Type"} value={character.type || "Uknown"}/>
    </div>
      
    </>
  )
}