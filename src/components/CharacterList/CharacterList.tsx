import React from 'react'

import Card from "../Card/Card"
import "./CharacterList.scss"

/* type Props = {
  character: object,
  id:number,
  image: string,
  name: string,
  gender: string,
  status: string,
  specie: string,
  origin: string,
  type: string
} */

export default function CharacterList({sortedCharacters}: any) {
    if(!sortedCharacters.length) {
        return(
            <h1>
              Not found
            </h1>
        )
    }
    return (
      <div className='character-list'>
        {sortedCharacters.map((character: any) =>{
          return <Card key={character.id} character={character}/>
        })

        }
        
      </div>
  )
}
