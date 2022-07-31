import React from "react";
import MainLayout from "./Layouts/MainLayout";
import styled from 'styled-components';
import GlobalThemeProvider from "./HOC/GlobalThemeProvider";
import GlobalModalProvider from "./HOC/GlobalModalProvider";

const StyledApp = styled.div `
  min-height: 100vh;
`

const App = () => {
    return(
        <StyledApp className={'app'}>
            <GlobalThemeProvider>
                <GlobalModalProvider>
                    <MainLayout/>
                </GlobalModalProvider>
            </GlobalThemeProvider>
        </StyledApp>
    )
}

export default App;