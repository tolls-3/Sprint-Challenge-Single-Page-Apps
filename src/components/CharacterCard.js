import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  width: 30vw;
  height: auto;
  border: 1px solid #cccccc;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem;
  background: #00ff00;
  img {
    border-radius: 100%;
  }
`;

export default function CharacterCard(props) {
  return (
    <StyledCard>
      <img src={props.image} alt="character" />
      <h2>Name: {props.name}</h2>
      <p>Status: {props.status}</p>
      <p>Species: {props.species}</p>
      <p>Gender: {props.gender}</p>
      {/* <p>Location: {props.location.name}</p>
      <p>Origin: {props.origin.name}</p> */}
    </StyledCard>
  );
}
