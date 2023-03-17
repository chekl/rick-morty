import { useMemo } from 'react';

export const useCharacter = (characters: any[], search: string) => {
  const sortedCharacters = useMemo(() => characters.filter((character) => {
    return character.name.toLowerCase().includes(search.toLowerCase());
  }), [search, characters]);
  return sortedCharacters;
};
