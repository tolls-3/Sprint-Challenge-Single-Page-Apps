import React, { useEffect, useState } from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList";
import { Route } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import SearchForm from "./components/SearchForm";

const characterApi = "https://rickandmortyapi.com/api/character/";

export default function App() {
  const [characterData, setCharacterData] = useState();
  // debugger;
  const [searchTerm, setSearchTerm] = useState("");
  const onSearch = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(characterApi)
      .then(response => {
        // debugger;
        setCharacterData(response.data.results);
      })

      .catch(error => {
        console.log(error);
      });
  }, []);

  if (characterData){
  return (
    <MainStyle>
      <Header />
      <SearchForm onSearch={onSearch} searchTerm={searchTerm} />
      <Route exact path="/" component={WelcomePage} />
      <Route
        path="/characters"
        render={() => (
          <CharacterList
            characterList={characterData.filter((char) => {
              return char.name.toLowerCase().includes(searchTerm.toLowerCase());
            })}
          />
        )}
      />
    </MainStyle>
  );
}

return <div><h3>Data is loading</h3></div>;
}


const MainStyle = styled.main`
  background: yellow;
`;
