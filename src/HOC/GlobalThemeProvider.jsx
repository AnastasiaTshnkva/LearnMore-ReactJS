import React, {useState} from "react";
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import {THEME_COLORS} from "../constants/globalTheme/themeColors";

const GlobalStyle = createGlobalStyle`
    
`

const GlobalThemeProvider = (props) => {
    let [theme, setTheme] = useState('light');

    const themeColors = {
        mainBackgroundColor: theme === 'dark' ? THEME_COLORS.dark.mainBackgroundColor : THEME_COLORS.light.mainBackgroundColor,
        loginBackgroundColorRight: theme === 'dark' ? THEME_COLORS.dark.loginBackgroundColorRight : THEME_COLORS.light.loginBackgroundColorRight,
        loginBackgroundColorLeft: theme === 'dark' ? THEME_COLORS.dark.loginBackgroundColorLeft : THEME_COLORS.light.loginBackgroundColorLeft,
        loginWindowBorder: theme === 'dark' ? THEME_COLORS.dark.loginWindowBorder : THEME_COLORS.light.loginWindowBorder,
        buttonHoverShadow: theme === 'dark' ? THEME_COLORS.dark.buttonHoverShadow : THEME_COLORS.light.buttonHoverShadow,
        textColor: theme === 'dark' ? THEME_COLORS.dark.textColor : THEME_COLORS.light.textColor,
        lightTextColor: theme === 'dark' ? THEME_COLORS.dark.lightTextColor : THEME_COLORS.light.lightTextColor,
        accentTextColor: theme === 'dark' ? THEME_COLORS.dark.accentTextColor : THEME_COLORS.light.accentTextColor,
        headerBackgroundColor: theme === 'dark' ? THEME_COLORS.dark.headerBackgroundColor : THEME_COLORS.light.headerBackgroundColor,
        headerTextColor: theme === 'dark' ? THEME_COLORS.dark.headerTextColor : THEME_COLORS.light.headerTextColor,
        cardColor: theme === 'dark' ? THEME_COLORS.dark.cardColor : THEME_COLORS.light.cardColor,
        cardBorderColor: theme === 'dark' ? THEME_COLORS.dark.cardBorderColor : THEME_COLORS.light.cardBorderColor,
        buttonColor: theme === 'dark' ? THEME_COLORS.dark.buttonColor : THEME_COLORS.light.buttonColor,
        buttonHoverColor: theme === 'dark' ? THEME_COLORS.dark.buttonHoverColor : THEME_COLORS.light.buttonHoverColor,
        inputBorderColor: theme === 'dark' ? THEME_COLORS.dark.inputBorderColor : THEME_COLORS.light.inputBorderColor,
        partBackgroundColor: theme === 'dark' ? THEME_COLORS.dark.partBackgroundColor : THEME_COLORS.light.partBackgroundColor,
        descriptionPartColor: theme === 'dark' ? THEME_COLORS.dark.descriptionPartColor : THEME_COLORS.light.descriptionPartColor,
        rejectButtonColor: theme === 'dark' ? THEME_COLORS.dark.rejectButtonColor : THEME_COLORS.light.rejectButtonColor,
        rejectHoverButtonColor: theme === 'dark' ? THEME_COLORS.dark.rejectHoverButtonColor : THEME_COLORS.light.rejectHoverButtonColor,
    }

    const themeSwitch = () => {theme === 'dark' ? setTheme('light') : setTheme('dark')};

    return (
        <ThemeProvider theme={themeColors}>
            {props.children}
        </ThemeProvider>
    )
}

export default GlobalThemeProvider;