import React, { useContext, useState } from "react";
import styled, { css, withTheme } from "styled-components";
import "../../styling/App.css";
import { Header1 } from "../../styling/Headers";
import { Link, NavLink, useHistory, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AppContext } from "../../Contexts";
import Hamburger from "../Hamburger";
import {
  SidebarItem,
  SidebarItemButton,
  SidebarList,
} from "../../styling/GeneralComponents";
import DarkModeButton from "../DarkModeButton";

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  let location = useLocation();
  let history = useHistory();
  const { size } = useContext(AppContext);

  const navData = [
    ["Learn", "/learn"],
    ["Quiz", "/quiz"],
    ["About", "/about"],
  ];

  function handleClick(path) {
    if (location.pathname !== path) history.push(path);
    setShowSidebar(false);
  }

  const sidebarItems = navData.map((text, index) => {
    return (
      <SidebarItem key={"sidebar-item-" + index}>
        <SidebarItemButton
          selected={location.pathname.includes(text[1])}
          textAlign="right"
          onClick={() => {
            handleClick(text[1]);
          }}
        >
          {text[0]}
        </SidebarItemButton>
      </SidebarItem>
    );
  });

  const navLinks = navData.map((text, index) => {
    return (
      <StyledNavLink
        to={text[1]}
        className="no-underline"
        key={"sidebar-item-" + index}
      >
        {text[0]}
      </StyledNavLink>
    );
  });

  return (
    <Nav isLearn={location.pathname.includes("/learn")}>
      <Link to="/" className="no-underline">
        <Header1 margin="0.5rem 0.5rem">Euismod</Header1>
      </Link>
      {size.width <= 768 ? (
        <>
          <HamburgerWrapper aria-label="navigation-bar">
            <Hamburger
              height="3px"
              width="24px"
              stateChange={showSidebar}
              setStateChange={setShowSidebar}
              useCase="home"
            />
          </HamburgerWrapper>

          <AnimatePresence>
            {showSidebar && (
              <Sidebar
                initial={{ x: 192 }}
                animate={{ x: 0 }}
                exit={{ x: 200 }}
                transition={{ ease: [0.6, 0.05, 0.28, 0.91] }}
              >
                <SidebarList margin="3rem 0 1rem">
                  {sidebarItems} <DarkModeButton margin="1.25rem 1rem" />
                </SidebarList>
              </Sidebar>
            )}
          </AnimatePresence>
        </>
      ) : (
        <FlexContainer>
          {navLinks}
          <DarkModeButton />
        </FlexContainer>
      )}
    </Nav>
  );
}

const Nav = styled(motion.nav)`
  height: auto;
  margin: 0 auto;
  width: min(85rem, 80%);
  box-sizing: border-box;
  color: white;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: auto;
    margin: 0 0.75rem;
  }

  ${(props) =>
    props.isLearn &&
    css`
      width: auto;
      margin: 0 0.5rem;
    `}
`;

const activeClassName = "nav-item-active";

const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  color: ${(props) => props.theme.colors.disabled};
  font-size: 1.5em;
  margin: 0.5rem 0.5rem;
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: normal;
  transition: 150ms;

  :hover {
    color: ${(props) => props.theme.colors.primary};
    transition: 150ms;
  }

  &.${activeClassName} {
    transition: 300ms;
    color: ${(props) => props.theme.colors.primary};
  }
`;

const FlexContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Sidebar = styled(motion.div)`
  width: 12rem;
  position: absolute;
  right: 0;
  top: 0;
  background: ${(props) => props.theme.colors.lowContrastBackground};
  box-shadow: ${(props) => props.theme.misc.shadow};
  border-bottom-left-radius: 0.5rem;
  padding: 0 0.5rem;
  z-index: 1;
`;

const HamburgerWrapper = styled.button`
  border: 0;
  background: transparent;
  padding: 0;
  position: absolute;
  z-index: 2;
  right: 1rem;
  top: 1rem;
`;

export default withTheme(Navbar);
