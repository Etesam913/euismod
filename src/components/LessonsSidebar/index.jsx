import React, { useContext, useState } from "react";
import { Header1 } from "../../styling/Headers";
import styled, { css, withTheme } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { AppContext } from "../../Contexts";
import { useHistory, useLocation } from "react-router-dom";
import Hamburger from "../Hamburger";
import { Checkbox, XSvg } from "../../SvgMaster";
import {
  HamburgerWrapper,
  SidebarContainer,
  SidebarItem,
  SidebarItemButton,
  SidebarList,
} from "../../styling/GeneralComponents";

function LessonsSidebar({
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

  const sidebarData = [
    ["Grid Creation", "/learn"],
    ["Item Placement", "/learn/2"],
    ["Grid Areas", "/learn/3"],
    ["Grid Gap/fr unit", "/learn/4"],
  ];
  const sidebarItems = sidebarData.map((text, index) => {
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
      return <span />;
    }

    return (
      <SidebarItem key={"lesson-" + index}>
        <SidebarItemButton
          selected={location.pathname === text[1]}
          onClick={() => {
            handleClick(text[1]);
          }}
        >
          {text[0]}
          {solveStatus()}
        </SidebarItemButton>
      </SidebarItem>
    );
  });

  return (
    <SidebarContainer
      leftScreen
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
          stateChange={isSideNavShowing}
          setStateChange={setIsSideNavShowing}
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
            <SidebarList>{sidebarItems}</SidebarList>
          </motion.div>
        )}
      </AnimatePresence>
    </SidebarContainer>
  );
}

export default withTheme(LessonsSidebar);
