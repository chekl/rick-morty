import { useMemo } from 'react';
import { Character } from '../interfaces/interfaces';

export const useCharacter = (characters: Character[], search: string) => {
  const sortedCharacters = useMemo(() => characters.filter((character) => {
    return character.name.toLowerCase().includes(search.toLowerCase());
  }), [search, characters]);
  return sortedCharacters.sort((a, b) => {
    let x = a.name.toLowerCase();
    let y = b.name.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  } );
};
