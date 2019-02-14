import { createGlobalStyle } from "styled-components";
import "./Resources/fonts/circularStd/CircularStd-Black.otf";
import "./Resources/fonts/circularStd/CircularStd-Medium.otf";
import "./Resources/fonts/circularStd/CircularStd-Bold.otf";

export const defaultTheme = {
  bgPrimary: "#202225",
  bgSecondary: "#2F3136",
  bgThird: "#2A2C30",
  textSecondary: "#828282",
  orangeColor: "#FE9264",
  errorColor: "#f82332",
  fonts: {
    Roboto: "Roboto, sans-serif",
    CircularStd: "CircularStd, sans-serif",
  },
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  div {
    cursor: default;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.Roboto};
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
    color: ${({ theme }) => theme.textSecondary};
  }
`;
