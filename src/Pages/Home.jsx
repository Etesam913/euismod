import React from "react";
import styled from "styled-components";
import { Header1, Header2, Paragraph } from "../styling/Headers";
import { motion } from "framer-motion";

function Home() {
  return (
    <Container>
      <Header1>Anyone Can Learn CSS Grid</Header1>
      <Paragraph maxWidth="30rem" fontSize="1.25em">
        Try out the interactive lesson to see how easy learning CSS Grid can be.
      </Paragraph>
    </Container>
  );
}

const Container = styled(motion.div)`
  padding: 2.5rem 5rem;
  transition: padding 300ms ease-in-out;
  @media screen and (max-width: 768px) {
    padding: 2.5rem 3rem;
    transition: padding 300ms ease-in-out;
  }
`;

export default Home;
