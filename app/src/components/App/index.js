import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import theme from "./Theme";
import Routes from "../../routes";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  div {
    cursor: default;
  }

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background: ${({ theme }) => theme.bgPrimary};
    color: ${({ theme }) => theme.textSecondary};
  }

  /* Scroll styling */

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.bgThird};
    border-radius: 7px;
    margin: 5px 0;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #36393f;
    border-radius: 7px;

    &:hover {
      background: #8c8c8c;
    }
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
