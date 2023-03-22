import { Dispatch } from 'react';

export interface Character {
  id: number;
  image: string;
  name: string;
  gender: string;
  status: string;
  species: string;
  origin: {
    name: string;
  };
  type: string;
}

export interface CharacterState {
  characters: Character[];
  status: string;
  error: string | undefined;
}

export interface Search {
  search: string;
  setSearch: Dispatch<React.SetStateAction<string>>;
}

export interface InfoItemInterface {
  option: string;
  value: string;
}

export interface SortedCharacters {
  sortedCharacters: Character[];
}

export interface CardCharacter {
  character: Character;
}
