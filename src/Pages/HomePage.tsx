import React from "react";

import SearchField from "../components/SearchField/SearchField"
import CharacterList from '../components/CharacterList/CharacterList';

import { Link } from "react-router-dom";


export default function HomePage() {
  
  return (
    <div>
      <Link to={`/login`}>LOGIN</Link>
      <img />
      <SearchField/>
      <CharacterList/>
    </div>
  );
}
