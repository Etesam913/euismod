import React, { useContext } from "react";
import { buttonVariants } from "../../styling/variants";
import { Moon, Sun } from "../../SvgMaster";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AppContext } from "../../Contexts";

function DarkModeButton({ margin }) {
  const { isDarkMode, setIsDarkMode } = useContext(AppContext);

  return (
    <Button
      aria-label="dark mode"
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      onClick={() => {
        localStorage.setItem("isDarkMode", JSON.stringify(!isDarkMode));
        setIsDarkMode(!isDarkMode);
      }}
      margin={margin}
    >
      {isDarkMode ? (
        <Moon height="26" width="26" />
      ) : (
        <Sun height="26" width="26" />
      )}
    </Button>
  );
}

const Button = styled(motion.button)`
  background: transparent;
  border: 0;
  padding: 0;
  height: 26px;
  width: 26px;
  cursor: pointer;
  margin: ${(props) => (props.margin ? props.margin : "0 1rem")};
`;

export default DarkModeButton;
