import React from "react";
import MainLayout from "./MainLayout/MainLayout";
import styled from 'styled-components';
import GlobalThemeProvider from "./HOC/GlobalThemeProvider";


class App extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={'app'}>
                <GlobalThemeProvider>
                    <MainLayout/>
                </GlobalThemeProvider>
            </div>
        )
    }
}

export default App;