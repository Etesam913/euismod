import React, { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { HashRouter as Router, Route } from "react-router-dom";
import { darkTheme, lightTheme } from "./styling/theme";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Learn from "./Pages/Learn";
import { AppContext } from "./Contexts";
import { useWindowSize } from "./components/CustomHooks";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const size = useWindowSize();

  return (
    <AppContext.Provider value={{ isDarkMode, setIsDarkMode, size }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Router>
          <Navbar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/learn">
            <Learn isDarkMode={isDarkMode} />
          </Route>
        </Router>
        <GlobalStyles />
      </ThemeProvider>
    </AppContext.Provider>
  );
}

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${(props) => props.theme.colors.background};
    transition: background 150ms ease-in-out;
    font-family: ${(props) => props.theme.fonts.secondary};
  }
`;

export default App;
