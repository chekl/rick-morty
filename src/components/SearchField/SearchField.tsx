import React, { useEffect } from 'react';
import { Search } from '../../interfaces/interfaces';
import './SearchField.scss';

export default function SearchField({ search, setSearch }: Search) {
  useEffect(() => {
    const storedValue = localStorage.getItem('search');
    if (storedValue) {
      setSearch(storedValue);
    }
  }, [setSearch]);

  useEffect(() => {
    localStorage.setItem('search', search);
  }, [search]);

  return (
    <input
      className='search-bar'
      placeholder='Filter by name...'
      value={search}
      type='text'
      onChange={(event) => setSearch(event.target.value)}
    />
  );
}
