import React, { useContext, useState } from "react";
import { Header1 } from "../../styling/Headers";
import styled, { css } from "styled-components";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { AppContext } from "../../Contexts";
import { useHistory } from "react-router-dom";
import Hamburger from "../Hamburger";

function Sidebar() {
  const { isDarkMode, size } = useContext(AppContext);
  const [isSideNavShowing, setIsSideNavShowing] = useState(true);
  const history = useHistory();

  function handleClick(path) {
    history.push(path);
  }

  const sideBarData = [
    ["Create The Grid", "/learn"],
    ["Item Placement", "/learn/2"],
    ["Grid Areas", "/learn/3"],
    ["Grid Gap", "/learn/4"],
  ];
  const sideBarItems = sideBarData.map((text) => {
    return (
      <LessonItem isDarkMode={isDarkMode}>
        <LessonButton
          onClick={() => {
            handleClick(text[1]);
          }}
        >
          {text[0]}
        </LessonButton>
      </LessonItem>
    );
  });

  return (
    <>
      <LessonsContainer
        isSideNavShowing={isSideNavShowing}
        initial={{ padding: "14px 12px 12px 10px" }}
        animate={
          isSideNavShowing
            ? { width: 220, height: 370 }
            : {
                width: 52,
                height: 52,
              }
        }
      >
        <HamburgerWrapper isSideNavShowing={isSideNavShowing}>
          <Hamburger
            sideNav={isSideNavShowing}
            setSideNav={setIsSideNavShowing}
            height="3px"
            width="24px"
          />
        </HamburgerWrapper>
        <AnimatePresence>
          {isSideNavShowing && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Header1 margin={"0"} padding={"0rem .75rem"}>
                Lessons
              </Header1>
              <LessonsList>{sideBarItems}</LessonsList>
            </motion.div>
          )}
        </AnimatePresence>
      </LessonsContainer>
    </>
  );
}

const LessonItem = styled(motion.li)`
  margin-top: 1.5rem;
`;

const LessonButton = styled(motion.button)`
  font-size: 1.25em;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.lowContrastBackground};
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: normal;
  padding: 0.75rem;
  width: 100%;
  text-align: left;
  border-radius: 0.5rem;
  transition: 200ms ease-in-out;
  white-space: nowrap;

  :hover {
    filter: brightness(90%);
    transition: 200ms ease-in-out;
  }
`;

const LessonsList = styled(motion.ul)`
  list-style-type: none;
  padding: 0;
`;

const LessonsContainer = styled(motion.section)`
  background: ${(props) => props.theme.colors.lowContrastBackground};
  overflow: hidden;
  border-top-right-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
  box-sizing: border-box;
  position: absolute;
  z-index: 1;

  display: block;
  transform: translate3d(0px 0px 0px) !important;
`;

const HamburgerWrapper = styled.button`
  border: 0;
  padding: 0;
  ${(props) =>
    props.isSideNavShowing &&
    css`
      top: 0.25rem;
      right: 0.25rem;
    `}

  position: absolute;
  background: transparent;
`;

const Container = styled.div``;

export default Sidebar;
