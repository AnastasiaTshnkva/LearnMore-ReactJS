import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import {THEME_COLORS} from "../constants/globalTheme/themeColors";
import GlobalThemeProvider from "./GlobalThemeProvider";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
    body {
      margin: 0 auto;
      min-height: 100vh;
      font-family: "open sans",arial,helvetica,sans-serif;
      font-weight: 400;
      font-size: 18/20px;
    }
`

const GlobalStyleWrapper = (props) => {
     return (
        <React.Fragment>
            <GlobalThemeProvider>
                <GlobalStyle/>
                {props.children}
            </GlobalThemeProvider>
        </React.Fragment>
     )
}

export default GlobalStyleWrapper;