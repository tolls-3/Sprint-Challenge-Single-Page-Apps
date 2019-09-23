import React from "react";
import styled from "styled-components";
import SearchForm from "./SearchForm";
import CharacterList from "./CharacterList";
import CharacterCard from "./CharacterCard";

export default function Search(props) {
  // TODO: Add useState to track data from useEffect
  const { characterList, onSearch, searchCharacterProp } = props;

  return (
    <div>
      <h2>Search</h2>
      <div>
        <SearchForm
          onSearch={onSearch}
          searchCharacterProp={searchCharacterProp}
        />
        {
          characterList.length>0 ? <CharacterList
          characterList={characterList.filter(char => {
            return char.name
              .toLowerCase()
              .includes(searchCharacterProp.toLowerCase());
          })}
        />
        : null
        }
        
      </div>
    </div>
  );
}
