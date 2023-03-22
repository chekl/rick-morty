import React, { useEffect, useState } from 'react';

import SearchField from '../../components/SearchField/SearchField';
import CharacterList from '../../components/CharacterList/CharacterList';
import Logo from '../../components/Logo/Logo';

import { useCharacter } from '../../hooks/useCharacter';
import { Character } from '../../interfaces/interfaces';
import { fetchCharacters } from '../../API/api';

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [characters, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    async function getCharacters() {
        setCharacters(await fetchCharacters());
    }
    getCharacters();
  }, []);

  return (
    <div>
      <Logo />
      <div>
        <SearchField setSearch={setSearch} search={search} />
        <CharacterList sortedCharacters={useCharacter(characters, search)} />
      </div>
    </div>
  );
}
