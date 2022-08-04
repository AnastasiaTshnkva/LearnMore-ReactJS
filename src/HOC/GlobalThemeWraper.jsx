import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import {THEME_COLORS} from "../constants/globalTheme/themeColors";
import GlobalThemeProvider from "./GlobalThemeProvider";

const GlobalStyle = createGlobalStyle`
    body {
      margin: 0 auto;
      min-height: 100vh;
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