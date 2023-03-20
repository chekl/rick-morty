import React, {useEffect, useState} from "react";

import SearchField from "../components/SearchField/SearchField"
import CharacterList from '../components/CharacterList/CharacterList';

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import { selectStatus, selectAll, fetchData } from "../store/characters";
import { useCharacter } from "../hooks/useCharacter";

import { googleLogout, useGoogleLogin } from '@react-oauth/google';

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


  const [ user, setUser ] = useState({access_token: ''});
  const [ isLogining, setIsLogining ] = useState(false)

  const login = useGoogleLogin({
      onSuccess: (res) => setUser(res),
      onError: (error) => console.log('Login Failed:', error)
  });


  useEffect(
    () => {
        if (user) {
            fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
            'method': 'GET',        
            'headers': {
                        'Authorization': `Bearer ${user.access_token}`,
                        'Accept': 'application/json'
                    }
                })
                .then(() => {
                    setIsLogining(true);
                })
                .catch((err) => console.log(err));
        }
    },
    [ user ]
);

const logOut = () => {
    googleLogout();
    setIsLogining(false);
};

  return (
    <div>
      {isLogining ? (
                <button onClick={() => logOut()}>Logout</button>
            ) : (
                <button onClick={() => login()}>Login by Google</button>
            )}
    
      <img src="RickMortyLogo.svg" alt="Rick and Morty Logo"/>
      <SearchField setSearch={setSearch} search={search}/>
      <CharacterList sortedCharacters={sortedCharacters}/>
    </div>
  );
}
