import React, {createContext, useState} from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { THEME_COLORS } from 'constants/globalTheme/themeColors';

const GlobalStyle = createGlobalStyle`
    
`
export const MySwitchThemeContext = createContext('oops default theme error');
export const MyThemeContext = createContext('oops default theme error');

const GlobalThemeProvider = (props) => {
    const [theme, setTheme] = useState('light');
    localStorage.setItem('theme', theme);

    const themeColors = {
        mainBackgroundColor: theme === 'dark' ? THEME_COLORS.dark.mainBackgroundColor : THEME_COLORS.light.mainBackgroundColor,
        loginBackgroundColorRight: theme === 'dark' ? THEME_COLORS.dark.loginBackgroundColorRight : THEME_COLORS.light.loginBackgroundColorRight,
        loginBackgroundColorLeft: theme === 'dark' ? THEME_COLORS.dark.loginBackgroundColorLeft : THEME_COLORS.light.loginBackgroundColorLeft,
        loginWindowBackground: theme === 'dark' ? THEME_COLORS.dark.loginWindowBackground : THEME_COLORS.light.loginWindowBackground,
        loginWindowTextColor: theme === 'dark' ? THEME_COLORS.dark.loginWindowTextColor : THEME_COLORS.light.loginWindowTextColor,
        loginWindowBorder: theme === 'dark' ? THEME_COLORS.dark.loginWindowBorder : THEME_COLORS.light.loginWindowBorder,
        buttonHoverShadow: theme === 'dark' ? THEME_COLORS.dark.buttonHoverShadow : THEME_COLORS.light.buttonHoverShadow,
        textColor: theme === 'dark' ? THEME_COLORS.dark.textColor : THEME_COLORS.light.textColor,
        lightTextColor: theme === 'dark' ? THEME_COLORS.dark.lightTextColor : THEME_COLORS.light.lightTextColor,
        accentTextColor: theme === 'dark' ? THEME_COLORS.dark.accentTextColor : THEME_COLORS.light.accentTextColor,
        headerBackgroundColor: theme === 'dark' ? THEME_COLORS.dark.headerBackgroundColor : THEME_COLORS.light.headerBackgroundColor,
        headerTextColor: theme === 'dark' ? THEME_COLORS.dark.headerTextColor : THEME_COLORS.light.headerTextColor,
        cardColor: theme === 'dark' ? THEME_COLORS.dark.cardColor : THEME_COLORS.light.cardColor,
        cardTextColor: theme === 'dark' ? THEME_COLORS.dark.cardTextColor : THEME_COLORS.light.cardTextColor,
        cardBorderColor: theme === 'dark' ? THEME_COLORS.dark.cardBorderColor : THEME_COLORS.light.cardBorderColor,
        buttonColor: theme === 'dark' ? THEME_COLORS.dark.buttonColor : THEME_COLORS.light.buttonColor,
        buttonHoverColor: theme === 'dark' ? THEME_COLORS.dark.buttonHoverColor : THEME_COLORS.light.buttonHoverColor,
        inputBorderColor: theme === 'dark' ? THEME_COLORS.dark.inputBorderColor : THEME_COLORS.light.inputBorderColor,
        inputTextColor: theme === 'dark' ? THEME_COLORS.dark.inputTextColor : THEME_COLORS.light.inputTextColor,
        partBackgroundColor: theme === 'dark' ? THEME_COLORS.dark.partBackgroundColor : THEME_COLORS.light.partBackgroundColor,
        descriptionPartColor: theme === 'dark' ? THEME_COLORS.dark.descriptionPartColor : THEME_COLORS.light.descriptionPartColor,
        rejectButtonColor: theme === 'dark' ? THEME_COLORS.dark.rejectButtonColor : THEME_COLORS.light.rejectButtonColor,
        rejectHoverButtonColor: theme === 'dark' ? THEME_COLORS.dark.rejectHoverButtonColor : THEME_COLORS.light.rejectHoverButtonColor,
    }

    // const themeSwitch = () => {
    //     theme === 'dark' ? setTheme('light') : setTheme('dark')
    // };

    return (
        <MyThemeContext.Provider value={theme}>
            <MySwitchThemeContext.Provider value={(themeSwitch) =>  {theme === 'dark' ? setTheme('light') : setTheme('dark')}}>
                <ThemeProvider theme={themeColors}>
                    {props.children}
                </ThemeProvider>
            </MySwitchThemeContext.Provider>
        </MyThemeContext.Provider>

    )
}

export default GlobalThemeProvider;