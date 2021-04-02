import React, { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { HashRouter as Router, Route } from "react-router-dom";
import { darkTheme, lightTheme } from "./styling/theme";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Route path="/">
            <Home></Home>
        </Route>
      </Router>
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
    font-family: "Nunito Sans", "Roboto", "Helvetica", "Arial";
  }
`;

export default App;
