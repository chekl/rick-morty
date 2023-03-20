import React, {Dispatch, useEffect} from 'react';

import SearchIcon from '@mui/icons-material/Search';

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
<div>
  <SearchIcon />
  <input type="search" placeholder='Filter by name...'  value={search}
        onChange={ (event) => setSearch(event.target.value)}/>
</div>
  )
}

