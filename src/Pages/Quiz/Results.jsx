import React from "react";
import styled, { withTheme } from "styled-components";
import { Header1, Header2 } from "../../styling/Headers";

function Results() {
  return (
    <Container>
      <Header1> Results </Header1>
      <Header2>Your Score is: 5/5</Header2>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default withTheme(Results);
