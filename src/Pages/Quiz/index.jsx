import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Info from "./Info";
import Questions from "./Questions";

function Quiz() {
  return (
    <Container>
      <Route exact path="/quiz">
        <Info />
      </Route>
      <Route exact path="/quiz/1">
        <Questions />
      </Route>
    </Container>
  );
}

const Container = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default Quiz;
