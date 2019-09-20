import React from "react";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const { characterList } = props;

  return (
    <div>
      <h2>Characters:</h2>
      <SyledDivP className="character-list">
        {characterList.map(character => {
          return (
            <CharacterCard
              key={character.id}
              name={character.name}
              image={character.image}
              status={character.status}
              species={character.species}
              gender={character.gender}
              origin={character.origin}
              location={character.location}
            />
          );
        })}
      </SyledDivP>
    </div>
  );
}

const SyledDivP = styled.div`
  margin: 80px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
