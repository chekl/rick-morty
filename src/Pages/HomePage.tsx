import React, {useEffect, useState} from "react";

import SearchField from "../components/SearchField/SearchField"
import CharacterList from '../components/CharacterList/CharacterList';

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import { selectStatus, selectAll, fetchData } from "../store/characters";
import { useCharacter } from "../hooks/useCharacter";

import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

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


  /////////////////////////////////////////

  const [ user, setUser ] = useState({access_token: ''});
  const [ profile, setProfile ] = useState({picture: "", email: '', name: ''});

  const login = useGoogleLogin({
      onSuccess: (codeResponse) => setUser(codeResponse),
      onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(
    () => {
        if (user) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                    setProfile(res.data);
                })
                .catch((err) => console.log(err));
        }
    },
    [ user ]
);

// log out function to log the user out of google and set the profile array to null
const logOut = () => {
    googleLogout();
    setProfile({picture: "", email: '', name: ''});
};

////////////////////////////////////////////////////////////////
  return (
    <div>
      {profile.name != '' ? (
                <div>
                    <img src={profile.picture} alt="user" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <button onClick={logOut}>Log out</button>
                </div>
            ) : (
                <button onClick={() => login()}>Sign in with Google 🚀 </button>
            )}

 ///////////////////////////////////////////////////////////////////////////////           
      <Link to={`/login`}>LOGIN</Link>
      <img src="RickMortyLogo.svg" alt="Rick and Morty Logo"/>
      <SearchField setSearch={setSearch} search={search}/>
      <CharacterList sortedCharacters={sortedCharacters}/>
    </div>
  );
}
