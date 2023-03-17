import React, {useEffect, useState} from "react";

import SearchField from "../components/SearchField/SearchField"
import CharacterList from '../components/CharacterList/CharacterList';

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import { selectStatus, selectAll, fetchData } from "../store/characters";
import { useCharacter } from "../hooks/useCharacter";


export default function HomePage() {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector(selectStatus)
  const characters = useSelector(selectAll)
  const sortedCharacters: any[] = useCharacter(characters, search);
  
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData())
    }
  }, [status, dispatch])


  return (
    <div>
      <Link to={`/login`}>LOGIN</Link>
      <img src="RickMortyLogo.svg" alt="Rick and Morty Logo"/>
      <SearchField setSearch={setSearch} search={search}/>
      <CharacterList sortedCharacters={sortedCharacters}/>
    </div>
  );
}
