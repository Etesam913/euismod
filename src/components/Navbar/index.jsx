import React from "react";
import styled from "styled-components";
import { Header1 } from "../../styling/Headers";
import { Link } from "react-router-dom";
import { buttonVariants } from "../../styling/variants";
import { Moon, Sun } from "../../SvgMaster";
import { motion } from "framer-motion";

function Navbar({ isDarkMode, setIsDarkMode }) {
  return (
    <Nav>
      <Link to="/" style={{ textDecoration: "transparent" }}>
        <Header1 className={"no-underline"}>
          Euismod
        </Header1>
      </Link>
      <section>
        <DarkModeButton
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => {
            setIsDarkMode(!isDarkMode);
          }}
        >
          {isDarkMode ? (
            <Moon height="26" width="26" />
          ) : (
            <Sun height="26" width="26" />
          )}
        </DarkModeButton>
      </section>
    </Nav>
  );
}

const Nav = styled.nav`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  color: white;
  background: transparent;
  display: flex;
  padding: 0 3rem;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const DarkModeButton = styled(motion.button)`
  background: transparent;
  border: 0;
`;

export default Navbar;
