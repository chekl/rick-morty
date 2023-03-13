import { useMemo } from 'react';

export const useCharacter = (characters: any[], filter: string) => {
  const sortedCharacters = useMemo(() => {
    return characters.name.toLowerCase().includes(filter.toLowerCase());
  }, [filter, character]);

  return sortedCharacters;
};
