import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList";
import { Route } from "react-router-dom";
import styled from "styled-components";
import SearchForm from './components/SearchForm';

export default function App() {
  return (
    <MainStyle>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters" component={CharacterList} />
      <Route path='/search' component={SearchForm} />
    </MainStyle>
  );
}

const MainStyle = styled.main`
    background: yellow;`
    
   
