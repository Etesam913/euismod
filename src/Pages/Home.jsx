import React from "react";
import styled from "styled-components";
import { Header1, Paragraph } from "../styling/Headers";
import { motion } from "framer-motion";
import { FlexContainer } from "../styling/GeneralComponents";
import StyledButton from "../components/Button";
function Home() {

  return (
    <Container>
      <FlexContainer
        as={"section"}
        flexDirection="column"
        responsive
        alignItems="flex-start"
      >
        <Header1 responsive>Anyone Can Learn CSS Grid</Header1>
        <Paragraph responsive maxWidth="30rem" fontSize="1.25em">
          Try out the interactive lesson to see how easy learning CSS Grid can
          be.
        </Paragraph>
        <StyledButton text="Try Other Lessons" to='/learn'/>
      </FlexContainer>
      <section></section>
    </Container>
  );
}

const Container = styled(motion.div)`
  padding: 2.5rem 6rem;
  transition: padding 300ms ease-in-out;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;

  @media screen and (max-width: 768px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    justify-content: center;
  }

  @media screen and (max-width: 500px) {
    padding: 2.5rem 3rem;
    transition: padding 150ms ease-in-out;
  }
`;

export default Home;
