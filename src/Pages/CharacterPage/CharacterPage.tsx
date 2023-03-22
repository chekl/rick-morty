import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import InfoItem from '../../components/InfoItem/InfoItem';
import LinkBack from '../../components/LinkBack/LinkBack';
import './CharacterPage.scss';
import { Character } from '../../interfaces/interfaces';
import { fetchCharacterById } from '../../API/api';

export default function CharacterPage() {
  let { id } = useParams();
  const [character, setCharacter] = useState<Character>();

  useEffect(() => {
    async function getCharacter() {
      if (id) {
        setCharacter(await fetchCharacterById(id));
      }
    }
    getCharacter();
  }, [id]);

  return (
    <>
      <LinkBack />
      {character && (
        <>
          <div className='character-container'>
            <img
              className='character-img'
              src={character.image}
              alt={character.name}
            />
            <h2 className='character-name'>{character.name}</h2>
            <p className='character-info'>Information</p>
          </div>
          <div className='character-info-container'>
            <InfoItem option={'Gender'} value={character.gender} />
            <InfoItem option={'Status'} value={character.status} />
            <InfoItem option={'Specie'} value={character.species} />
            <InfoItem option={'Origin'} value={character.origin.name} />
            <InfoItem option={'Type'} value={character.type || 'Uknown'} />
          </div>
        </>
      )}
    </>
  );
}
