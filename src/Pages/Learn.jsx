import React from "react";
import styled from "styled-components";
import { Header1, Paragraph } from "../styling/Headers";
import { motion } from "framer-motion";

function Learn() {
  return (
    <Container>
      <LessonsContainer>
        <Header1 margin={"0"} padding={"0rem .75rem"}>
          Lessons
        </Header1>
        <LessonsList>
          <LessonItem as={"li"}>
            <LessonButton>Create The Grid</LessonButton>
          </LessonItem>
          <LessonItem as={"li"}>
            <LessonButton>Grid Areas</LessonButton>
          </LessonItem>
          <LessonItem as={"li"}>
            <LessonButton>Item Placement</LessonButton>
          </LessonItem>
        </LessonsList>
      </LessonsContainer>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  grid-template-rows: 100%;
  padding: 2.5rem 0rem;
  transition: padding 150ms ease-in-out;
`;

const LessonItem = styled.li`
  margin-top: 1.5rem;
`;

const LessonButton = styled(motion.button)`
  font-size: 1.25em;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.lowContrastBackground};
  color: ${(props) => props.theme.colors.primary};
  transition: color 150ms ease-in-out;
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: normal;
  padding: 0.75rem;
  width: 100%;
  text-align: left;
  border-radius: 0.5rem;
  transition: 150ms;

  :hover {
    filter: brightness(95%);
    transition: 150ms;
  }
`;

const LessonsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const LessonsContainer = styled.section`
  background: ${(props) => props.theme.colors.lowContrastBackground};
  padding: 1.25rem;
  border-top-right-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
  transition: background 150ms ease-in-out;
`;

export default Learn;
