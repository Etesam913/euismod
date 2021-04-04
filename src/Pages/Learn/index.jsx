import React from "react";
import styled from "styled-components";
import Sidebar from "../../components/Sidebar";
import { Route } from "react-router-dom";
import { ErrorText, Header1, SuccessText } from "../../styling/Headers";
import Lesson1 from "./Lesson1";
import Lesson3 from "./Lesson3";
import Lesson2 from "./Lesson2";

function Learn() {
  return (
    <Container>
      <Sidebar />
      <section>
        <Header1 textAlign="center">Learn CSS Grid</Header1>
        <Route exact path="/learn">
          <Lesson1 />
        </Route>
        <Route exact path="/learn/2">
          <Lesson2 />
        </Route>
        <Route exact path="/learn/3">
          <Lesson3 />
        </Route>
      </section>
    </Container>
  );
}

const Container = styled.div`
  padding: 2rem 0rem 1.25rem;
  transition: padding 150ms ease-in-out;
`;

export default Learn;
