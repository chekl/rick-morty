import React, {Dispatch, useEffect} from 'react';

import './SearchField.scss'

type Props = {
  search: string,
  setSearch: Dispatch<React.SetStateAction<string>>,
}

export default function SearchField ({search, setSearch}:Props) {
  
  useEffect(() => {
    const storedValue = localStorage.getItem("search");
    if (storedValue) {
      setSearch(storedValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("search", search);
  }, [search]);

  return (
  <input className='search-bar' placeholder='Filter by name...'  value={search}
       type='text' onChange={ (event) => setSearch(event.target.value)}/>
  )
}

