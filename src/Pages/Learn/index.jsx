import React from "react";
import styled from "styled-components";
import Sidebar from "../../components/Sidebar";
import { Route } from "react-router-dom";
import {Header1} from "../../styling/Headers";
import Lesson1 from "./Lesson1";

function Learn() {
  return (
    <Container>
      <Sidebar />
      <section>
          <Header1 textAlign="center">Learn CSS Grid</Header1>
          <Route exact path="/learn">
              <Lesson1 />
          </Route>
      </section>

    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 100%;
  padding: 2.5rem 0rem;
  transition: padding 150ms ease-in-out;
`;

export default Learn;
