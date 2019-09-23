import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <header className="ui centered">
      <DivStyle>
        <Link to="/">Home</Link>
        <Link to="/characters">Character List</Link>
        <Link to="/search">Search</Link>
      </DivStyle>
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </header>
  );
}

const DivStyle = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1.5rem;
  background-color: black;
  padding: 1rem;
  border-radius: 12px;

  a {
    text-decoration: none;
    color: green;
  }
`;
