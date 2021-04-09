import React, { useContext, useState } from "react";
import { Header1 } from "../../styling/Headers";
import styled, { css, withTheme } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { AppContext } from "../../Contexts";
import { useHistory, useLocation } from "react-router-dom";
import Hamburger from "../Hamburger";
import { Checkbox, XSvg } from "../../SvgMaster";

function Sidebar({
  setIsSideNavShowing,
  isSideNavShowing,
  solutionObjs,
  theme,
}) {
  const { isDarkMode } = useContext(AppContext);
  const location = useLocation();
  const history = useHistory();

  function handleClick(path) {
    if (location.pathname !== path) history.push(path);
    setIsSideNavShowing(false);
  }

  const sideBarData = [
    ["Grid Creation", "/learn"],
    ["Item Placement", "/learn/2"],
    ["Grid Areas", "/learn/3"],
    ["Grid Gap/fr unit", "/learn/4"],
  ];
  const sideBarItems = sideBarData.map((text, index) => {
    function solveStatus() {
      if (
        solutionObjs !== null &&
        solutionObjs[index] !== undefined &&
        solutionObjs[index] !== null
      ) {
        if (solutionObjs[index].isSolved) {
          return (
            <Checkbox
              height="28px"
              width="28px"
              fill={isDarkMode ? "#4bf285" : "#33ae29"}
            />
          );
        } else {
          return <XSvg height="28px" width="28px" fill="#d92020" />;
        }
      }
      return <span>c</span>;
    }

    return (
      <LessonItem isDarkMode={isDarkMode}>
        <LessonButton
          selected={location.pathname === text[1]}
          onClick={() => {
            handleClick(text[1]);
          }}
        >
          {text[0]}
          {solveStatus()}
        </LessonButton>
      </LessonItem>
    );
  });

  return (
    <>
      <LessonsContainer
        isSideNavShowing={isSideNavShowing}
        initial={{
          padding: "14px 12px 12px 10px",
        }}
        animate={
          isSideNavShowing
            ? { width: 230, height: 370, boxShadow: theme.misc.shadow }
            : {
                width: 52,
                height: 52,
                boxShadow: theme.misc.shadow,
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
  background-color: ${(props) =>
    props.selected
      ? props.theme.colors.selected
      : props.theme.colors.lowContrastBackground};
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: normal;
  padding: 0.75rem 0.3rem 0.75rem 0.75rem;
  width: 100%;
  text-align: left;
  border-radius: 0.5rem;
  transition: 200ms ease-in-out;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: space-between;

  :hover {
    background: ${(props) => props.theme.colors.highlighted};
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
  top: 7rem;
  @media screen and (max-width: 768px) {
    top: 4.35rem;
    transition: top 300ms;
  }
  transition: top 300ms;
  /*box-shadow: ${(props) => props.theme.misc.shadow};
  transition: 150ms box-shadow;*/
  display: block;
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

export default withTheme(Sidebar);
