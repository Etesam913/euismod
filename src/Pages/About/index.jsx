import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Header1, Paragraph } from "../../styling/Headers";
import { pageVariants } from "../../styling/variants";

function About() {
  return (
    <Container variants={pageVariants} initial="init" animate="anim">
      <Header1>About</Header1>
      <Paragraph fontSize="1.15em">
        The point of this website is to help people learn CSS grid in an
        interactive fashion.
      </Paragraph>
      <Paragraph fontSize="1.15em">
        This page was made as the final project for the UI Design class and was
        built with React.js, Styled Components, and Framer Motion.
      </Paragraph>
      <Paragraph margin="1rem 0.5rem 0" fontSize="1.15em">
        Created by Etesam Ansari.
      </Paragraph>
      <LinksList>
        <LinkItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
          <Link href="https://github.com/Etesam913/euismod">GitHub Repo</Link>
        </LinkItem>
        <LinkItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
          <Link href="https://www.etesam.dev">My Website</Link>
        </LinkItem>
      </LinksList>
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

const LinksList = styled.ul`
  list-style-type: none;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 980px) {
    align-items: center;
  }
`;

const LinkItem = styled(motion.li)`
  margin: 0.5rem 0;
  width: max-content;
`;

const Link = styled.a`
  font-size: 1.25em;
  font-family: ${(props) => props.theme.fonts.primary};
  text-decoration: underline;
  color: ${(props) => props.theme.colors.link};
  text-decoration-color: ${(props) => props.theme.colors.link};
  cursor: pointer;
`;

export default About;
