import React from "react";
import MainLayout from "./MainLayout/MainLayout";
import styled from 'styled-components';
import GlobalThemeProvider from "./HOC/GlobalThemeProvider";
import GlobalModalProvider from "./HOC/GlobalModalProvider";
import GlobalStyleWrapper from "./HOC/GlobalThemeWraper";
import RootRouter from "./Routs/RootRouter";

const StyledApp = styled.div `
  min-height: 100vh;
`

const App = () => {
    return(
        <StyledApp className={'app'}>
            {/*<RootRouter>*/}
                <GlobalStyleWrapper>
                    <GlobalModalProvider>
                        <MainLayout/>
                    </GlobalModalProvider>
                </GlobalStyleWrapper>
            {/*</RootRouter>*/}
        </StyledApp>
    )
}

export default App;