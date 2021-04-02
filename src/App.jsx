import React, { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";
import { darkTheme, lightTheme } from "./styling/theme";
import { Header1 } from "./styling/Headers";
import { Moon, Sun } from "./SvgMaster";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <DarkModeButton
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setIsDarkMode(!isDarkMode);
        }}
      >
        {isDarkMode ? (
          <Moon height="1.65rem" width="1.65rem" />
        ) : (
          <Sun height="1.65rem" width="1.65rem" />
        )}
      </DarkModeButton>
      <Header1>Testing ...</Header1>
      <GlobalStyles />
    </ThemeProvider>
  );
}

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${(props) => props.theme.colors.background};
    transition: background 150ms ease-in-out;
  }
`;

const DarkModeButton = styled(motion.button)`
  position: absolute;
  right: 0.35rem;
  top: 0.35rem;
  background: transparent;
  border: 0;
`;

export default App;
