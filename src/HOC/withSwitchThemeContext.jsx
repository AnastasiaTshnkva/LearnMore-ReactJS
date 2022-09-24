import React from 'react'

import {MySwitchThemeContext} from 'HOC/GlobalThemeProvider';

const withSwitchThemeContext = (Component, props) => {
    return () => {
        return (
            <MySwitchThemeContext.Consumer>
                {(themeSwitch) => (
                    <Component {...props} themeSwitch={themeSwitch}/>
                )}
            </MySwitchThemeContext.Consumer>
        )
    }
};

export default withSwitchThemeContext;


