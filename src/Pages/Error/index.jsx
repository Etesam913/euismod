import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageVariants } from "../../styling/variants";
import { Header1, Header2, Paragraph } from "../../styling/Headers";
import { Link } from "react-router-dom";

function Error() {
  return (
    <Container variants={pageVariants} initial="init" animate="anim">
      <Header1 margin="1.25rem 0.5rem">Page Not Found</Header1>
      <Header2 fontWeight="normal" margin="0.75rem 0.5rem">
        Sorry, but the page that you were looking for cannot be found
      </Header2>
      <Header2 fontWeight="normal" as={"p"} margin="0.5rem 0.5rem">
        You can return to the homepage <StyledLink to="/">here</StyledLink>
      </Header2>
    </Container>
  );
}

const Container = styled(motion.div)`
  padding: 2.5rem 0;
  transition: padding 300ms ease-in-out;
  width: min(85rem, 80%);
  margin: 0 auto;

  @media screen and (max-width: 980px) {
    text-align: center;
  }

  @media screen and (max-width: 500px) {
    padding: 2.5rem 1rem;
    transition: padding 150ms ease-in-out;
  }
`;

const StyledLink = styled(Link)`
  color: #00a7e5;
`;

export default Error;
