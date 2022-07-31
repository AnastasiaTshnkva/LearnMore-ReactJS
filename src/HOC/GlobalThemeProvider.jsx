import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import {THEME_COLORS} from "../constants/globalTheme/themeColors";


class GlobalThemeProvider extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            theme: 'light',
        }
    }

    themeSwitch(){
        this.setState(state => {return{theme: state.theme === 'dark' ? 'light':'dark'}})
    }

    render() {
        const theme = {
            backgroundColor: this.state.theme === 'dark' ? THEME_COLORS.dark.backgroundColor : THEME_COLORS.light.backgroundColor,
            textColor: this.state.theme === 'dark' ? THEME_COLORS.dark.textColor : THEME_COLORS.light.textColor,
            headerBackgroundColor: this.state.theme === 'dark' ? THEME_COLORS.dark.headerBackgroundColor : THEME_COLORS.light.headerBackgroundColor,
            headerTextColor: this.state.theme === 'dark' ? THEME_COLORS.dark.headerTextColor : THEME_COLORS.light.headerTextColor,
            cardColor: this.state.theme === 'dark' ? THEME_COLORS.dark.cardColor : THEME_COLORS.light.cardColor,
            cardBorderColor: this.state.theme === 'dark' ? THEME_COLORS.dark.cardBorderColor : THEME_COLORS.light.cardBorderColor,
            addButtonColor: this.state.theme === 'dark' ? THEME_COLORS.dark.addButtonColor : THEME_COLORS.light.addButtonColor,
            addButtonHoverColor: this.state.theme === 'dark' ? THEME_COLORS.dark.addButtonHoverColor : THEME_COLORS.light.addButtonHoverColor,
        }

        return (
            <ThemeProvider theme={theme}>
                {this.props.children}
            </ThemeProvider>
        )

    }
}

export default GlobalThemeProvider;