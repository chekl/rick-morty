import React from 'react';

import Card from '../Card/Card';
import './CharacterList.scss';
import { SortedCharacters } from '../../interfaces/interfaces';

export default function CharacterList({ sortedCharacters }: SortedCharacters) {
  return (
    <div className='character-list'>
      {sortedCharacters.map((character) => {
        return <Card key={character.id} character={character} />;
      })}
    </div>
  );
}
