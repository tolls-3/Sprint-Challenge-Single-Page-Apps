import React from "react";
import styled from 'styled-components';

export default function CharacterCard(props) {
  return(
  <div>
    <img src={props.image}/>
    <h2>{props.name}</h2>
    <p>{props.status}</p>
    <p>{props.species}</p>
    <p>{props.gender}</p>
    Location: {props.location.name}
    Origin: {props.origin.name}
  </div>
  )
}
