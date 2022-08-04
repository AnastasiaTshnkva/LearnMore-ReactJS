import React, {useState} from "react";
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import {THEME_COLORS} from "../constants/globalTheme/themeColors";

const GlobalStyle = createGlobalStyle`
    body {
      margin: 0 auto;
      min-height: 100vh
    }
`

const GlobalThemeProvider = (props) => {
    let [theme, setTheme] = useState('dark');

    const themeColors = {
    backgroundColor: theme === 'dark' ? THEME_COLORS.dark.backgroundColor : THEME_COLORS.light.backgroundColor,
    textColor: theme === 'dark' ? THEME_COLORS.dark.textColor : THEME_COLORS.light.textColor,
    headerBackgroundColor: theme === 'dark' ? THEME_COLORS.dark.headerBackgroundColor : THEME_COLORS.light.headerBackgroundColor,
    headerTextColor: theme === 'dark' ? THEME_COLORS.dark.headerTextColor : THEME_COLORS.light.headerTextColor,
    cardColor: theme === 'dark' ? THEME_COLORS.dark.cardColor : THEME_COLORS.light.cardColor,
    cardBorderColor: theme === 'dark' ? THEME_COLORS.dark.cardBorderColor : THEME_COLORS.light.cardBorderColor,
    addButtonColor: theme === 'dark' ? THEME_COLORS.dark.addButtonColor : THEME_COLORS.light.addButtonColor,
    addButtonHoverColor: theme === 'dark' ? THEME_COLORS.dark.addButtonHoverColor : THEME_COLORS.light.addButtonHoverColor,
    }

    // themeSwitch(){
    //     this.setState(state => {return{theme: state.theme === 'dark' ? 'light':'dark'}})
    // }

    return (
        <ThemeProvider theme={themeColors}>
            {props.children}
        </ThemeProvider>
    )
}

// class GlobalThemeProvider extends React.PureComponent {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             theme: 'light',
//         }
//     }
//
//     themeSwitch(){
//         this.setState(state => {return{theme: state.theme === 'dark' ? 'light':'dark'}})
//     }
//
//     render() {
//         const theme = {
//             backgroundColor: this.state.theme === 'dark' ? THEME_COLORS.dark.backgroundColor : THEME_COLORS.light.backgroundColor,
//             textColor: this.state.theme === 'dark' ? THEME_COLORS.dark.textColor : THEME_COLORS.light.textColor,
//             headerBackgroundColor: this.state.theme === 'dark' ? THEME_COLORS.dark.headerBackgroundColor : THEME_COLORS.light.headerBackgroundColor,
//             headerTextColor: this.state.theme === 'dark' ? THEME_COLORS.dark.headerTextColor : THEME_COLORS.light.headerTextColor,
//             cardColor: this.state.theme === 'dark' ? THEME_COLORS.dark.cardColor : THEME_COLORS.light.cardColor,
//             cardBorderColor: this.state.theme === 'dark' ? THEME_COLORS.dark.cardBorderColor : THEME_COLORS.light.cardBorderColor,
//             addButtonColor: this.state.theme === 'dark' ? THEME_COLORS.dark.addButtonColor : THEME_COLORS.light.addButtonColor,
//             addButtonHoverColor: this.state.theme === 'dark' ? THEME_COLORS.dark.addButtonHoverColor : THEME_COLORS.light.addButtonHoverColor,
//         }
//
//         return (
//             <ThemeProvider theme={theme}>
//                 {this.props.children}
//             </ThemeProvider>
//         )
//
//     }
// }

export default GlobalThemeProvider;