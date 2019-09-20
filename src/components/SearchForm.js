import React, { useState } from "react";

export default function SearchForm(props) {
  return (
    <section className="search-form">
      <input type="search" onChange={props.onSearch} />
      {/* still working on search form */}
    </section>
  );
}