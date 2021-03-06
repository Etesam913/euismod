import React, { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { darkTheme, lightTheme } from "./styling/theme";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Learn from "./Pages/Learn";
import { AppContext } from "./Contexts";
import { useWindowSize } from "./components/CustomHooks";
import Quiz from "./Pages/Quiz";
import Error from "./Pages/Error";
import About from "./Pages/About";

function App() {
  const darkModeInitial =
    JSON.parse(localStorage.getItem("isDarkMode")) ?? false;
  const [isDarkMode, setIsDarkMode] = useState(darkModeInitial);
  const size = useWindowSize();

  return (
    <AppContext.Provider value={{ isDarkMode, setIsDarkMode, size }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Router>
          <header>
            <Navbar />
          </header>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/learn">
              <Learn isDarkMode={isDarkMode} />
            </Route>
            <Route path="/quiz">
              <Quiz />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
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
    overflow-x: hidden;
  }
`;

export default App;
