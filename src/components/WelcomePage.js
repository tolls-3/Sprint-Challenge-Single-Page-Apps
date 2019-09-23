import React from "react";
import styled from "styled-components";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <ImgStyle>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        </ImgStyle>
      </header>
    </section>
  );
}

const ImgStyle = styled.h1`
  
`;
