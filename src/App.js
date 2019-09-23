import React, { useEffect, useState } from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList";
import { Route } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Search from "./components/Search";

const characterApi = "https://rikck-api.herokuapp.com/api";
//https://rikck-api.herokuapp.com/api///

export default function App() {
  const [characterInfo, setCharacterInfo] = useState([]);
  // debugger;
  const [searchCharacterProp, setSearchCharacterProp] = useState("");

  const onSearch = event => {
    setSearchCharacterProp(event.target.value);
    console.log(searchCharacterProp);
  };

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(characterApi)
      .then(response => {
        // debugger;
        setCharacterInfo(response.data.results);
      })

      .catch(error => {
        console.log(error);
      });
  }, []);

  if (characterInfo) {
    return (
      <MainStyle>
        <Header />
        <Route exact path="/" component={WelcomePage} />
        <Route
          path="/characters"
          render={() => (
            <CharacterList
              onSearch={onSearch}
              searchCharacterProp={searchCharacterProp}
              characterList={characterInfo.filter(char => {
                return char.name
                  .toLowerCase()
                  .includes(searchCharacterProp.toLowerCase());
              })}
            />
          )}
        />
        <Route path="/search" 
        render={()=>(
          <Search
          characterList={characterInfo}
          />
        )}
        />
      </MainStyle>
    );
  }

  return (
    <div>
      <h3>Data is loading</h3>
    </div>
  );
}

const MainStyle = styled.main`
  border: 2px solid blue;
  background: yellow;
`;
