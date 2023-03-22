export const fetchCharacters = async () => {
    return await fetch('https://rickandmortyapi.com/api/character', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => data.results);
  };

  export async function fetchCharacterById(id:string) {
    return await fetch(`https://rickandmortyapi.com/api/character/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => data);
  };