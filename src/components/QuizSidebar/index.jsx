import React, { useContext } from "react";
import {
  HamburgerWrapper,
  SidebarContainer,
  SidebarItem,
  SidebarItemButton,
  SidebarList,
} from "../../styling/GeneralComponents";
import { useHistory, useLocation } from "react-router-dom";
import { Header1 } from "../../styling/Headers";
import { AnimatePresence, motion } from "framer-motion";
import { withTheme } from "styled-components";
import Hamburger from "../Hamburger";
import { AppContext } from "../../Contexts";

function QuizSidebar({ setIsSideNavShowing, isSideNavShowing, theme }) {
  const { size } = useContext(AppContext);
  const location = useLocation();
  const history = useHistory();

  const sidebarData = [
    ["Question 1", "/quiz/1"],
    ["Question 2", "/quiz/2"],
    ["Question 3", "/quiz/3"],
    ["Question 4", "/quiz/4"],
    ["Question 5", "/quiz/5"],
  ];

  const sidebarItems = sidebarData.map((text, index) => {
    return (
      <SidebarItem key={"question-" + index}>
        <SidebarItemButton
          selected={location.pathname === text[1]}
          onClick={() => {
            location.pathname !== text[1] && history.push(text[1]);
          }}
        >
          {text[0]}
        </SidebarItemButton>
      </SidebarItem>
    );
  });
  return (
    <SidebarContainer
      left="0"
      isSideNavShowing={isSideNavShowing}
      initial={{
        padding: "13px 12px 12px 12px",
      }}
      animate={
        isSideNavShowing
          ? { width: 230, height: 450, boxShadow: theme.misc.shadow }
          : {
              width: 52,
              height: 52,
              boxShadow: theme.misc.shadow,
            }
      }
    >
      <HamburgerWrapper
        isSideNavShowing={isSideNavShowing}
        aria-label="sidebar"
      >
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
            <Header1 margin={"0"} padding={"0.5rem .75rem 0"}>
              Questions
            </Header1>
            <SidebarList>{sidebarItems}</SidebarList>
          </motion.div>
        )}
      </AnimatePresence>
    </SidebarContainer>
  );
}

export default withTheme(QuizSidebar);
