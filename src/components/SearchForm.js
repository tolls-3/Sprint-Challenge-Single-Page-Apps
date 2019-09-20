import React, { useState } from "react";

export default function SearchForm(props) {
  const { onSearch, searchTerm } = props;

  return (
    <section>
      <label htmlFor="nameInput" />
      <input
        onChange={onSearch}
        value={searchTerm}
        id="nameInput"
        type="text"
      />
    </section>
  );
}
