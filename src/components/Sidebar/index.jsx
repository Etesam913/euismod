import React, { useContext } from "react";
import { Header1 } from "../../styling/Headers";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AppContext } from "../../Contexts";
import { useHistory } from "react-router-dom";

function Sidebar() {
  const { isDarkMode } = useContext(AppContext);
  const history = useHistory();

  function handleClick(path) {
    history.push(path);
  }

  return (
    <LessonsContainer>
      <Header1 margin={"0"} padding={"0rem .75rem"}>
        Lessons
      </Header1>
      <LessonsList>
        <LessonItem as={"li"} isDarkMode={isDarkMode}>
          <LessonButton
            onClick={() => {
              handleClick("/learn");
            }}
          >
            Create The Grid
          </LessonButton>
        </LessonItem>
        <LessonItem as={"li"} isDarkMode={isDarkMode}>
          <LessonButton
            onClick={() => {
              handleClick("/learn/2");
            }}
          >
            Grid Areas
          </LessonButton>
        </LessonItem>
        <LessonItem as={"li"} isDarkMode={isDarkMode}>
          <LessonButton
            onClick={() => {
              handleClick("/learn/3");
            }}
          >
            Item Placement
          </LessonButton>
        </LessonItem>
      </LessonsList>
    </LessonsContainer>
  );
}

const LessonItem = styled.li`
  margin-top: 1.5rem;
`;

const LessonButton = styled(motion.button)`
  font-size: 1.25em;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.lowContrastBackground};
  color: ${(props) => props.theme.colors.primary};
  transition: 150ms ease-in-out;
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: normal;
  padding: 0.75rem;
  width: 100%;
  text-align: left;
  border-radius: 0.5rem;

  :hover {
    filter: brightness(90%);
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

export default Sidebar;
