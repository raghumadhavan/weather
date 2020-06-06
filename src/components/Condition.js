import React from "react";
import styled from "@emotion/styled";

function Condition() {
  const Temp = styled.h1`
    font-family: "Fira Sans", sans-serif;
    font-size: 2rem;
  `;
  const State = styled.h3`
    font-family: "Merriweather", sans-serif;
    font-size: 1.2rem;
  `;
  return (
    <>
      <Temp className="temperature">20 C</Temp>
      <State className="condition">Clouds</State>
    </>
  );
}

export default Condition;
