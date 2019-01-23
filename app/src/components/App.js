import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import Routes from "../routes";

const theme = {
  bgPrimary: "#202225",
  bgSecondary: "#2F3136",
  bgThird: "#2A2C30",
  textSecondary: "#828282",
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background: ${props => props.theme.bgPrimary};
    color: ${props => props.theme.textSecondary};
    padding-bottom: 50px;
  }

  /* Scroll styling */

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #2a2c30;
    border-radius: 7px;
    margin: 5px 0;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #36393f;
    border-radius: 7px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #8c8c8c;
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <Routes />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default App;
