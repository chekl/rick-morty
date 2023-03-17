import React from 'react'
import { Link, useParams } from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import InfoItem from '../components/InfoItem/InfoItem';
import { useSelector } from 'react-redux';
import { selectById } from '../store/characters';

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
      <Link to='..' relative="path">
        <ArrowBackIcon />
        Back to homepage
      </Link>
      <img src={character.image} alt={character.name}/>
      <p>Information</p>
       <InfoItem option={'Gender'} value={character.gender}/>
      <InfoItem option={"Status"} value={character.status}/>
      <InfoItem option={"Specie"} value={character.species}/>
   <InfoItem option={"Origin"} value={character.origin.name}/>
       <InfoItem option={"Type"} value={character.type || "Uknown"}/>
    </>
  )
}