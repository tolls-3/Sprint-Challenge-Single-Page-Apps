import React from "react";
import styled from 'styled-components';

const StyledCard = styled.div `
  /* border: 2px solid red;
  font-size: 1.5rem;
  width: 30%; */
  border: 2px solid red;
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  border: 2px solid red;
  width: 30%;
  margin: 50px auto;
  padding: 50px 210px;
  border-radius: 4px;
  font-size: 1.5rem;
  font-weight: bold;

`



export default function CharacterCard(props) {
  return(
  <StyledCard>
    <img src={props.image}/>
    <h2>{props.name}</h2>
    <p>{props.status}</p>
    <p>{props.species}</p>
    <p>{props.gender}</p>
    Location: {props.location.name}
    Origin: {props.origin.name}
  </StyledCard>
  )
}
