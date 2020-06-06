import React from "react";
import styled from "@emotion/styled";

function Icon() {
  const Icon = styled.img`
    width: 30%;
  `;
  return (
    <Icon
      className="icon"
      src="./img/Mostly Cloudy-2x.png"
      alt="Weather icon"
    />
  );
}

export default Icon;
