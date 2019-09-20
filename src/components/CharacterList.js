import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from "styled-components";
import CharacterCard from "./CharacterCard";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [character,setCharacter]=useState([]);
  const [error, setError]=useState('');
  const characterApi = 'https://rickandmortyapi.com/api/character/';
  const backupApi = 'https://rick-api.herokuapp.com/api/character';

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(characterApi)
      .then(response => {
        // debugger;
        setCharacter(response.data.results);
      })

      .catch(error =>{

      })
  
  }, []);

  return (
    <section className="character-list">
      {
        character.map(character => {
          return(
          <CharacterCard 
          key={character.id} 
          name={character.name} 
          image={character.image}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin}
          location={character.location}/>
          )
        })
      }
    </section>
  );
}
