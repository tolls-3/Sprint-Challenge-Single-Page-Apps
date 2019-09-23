import React from "react";

export default function SearchForm(props) {
  const { onSearch,searchCharacterProp } = props;

  return (
    <section>
      <label htmlFor="nameInput" />
      <input
        onChange={onSearch}
        id="nameInput"
        type="text"
      />
    </section>
  );
}
