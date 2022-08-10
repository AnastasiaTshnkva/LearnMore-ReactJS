import React from "react";
import MainLayout from "./MainLayout/MainLayout";
import styled from 'styled-components';
import GlobalThemeProvider from "./HOC/GlobalThemeProvider";
import GlobalModalProvider from "./HOC/GlobalModalProvider";
import GlobalStyleWrapper from "./HOC/GlobalThemeWraper";
import RootRouter from "./Routs/RootRouter";
import Login from "./Sceens/Login";
import LoginPage from "./Sceens/Login";
import { BrowserRouter } from "react-router-dom";

const App = () => {
    return(
        <BrowserRouter>
                <GlobalStyleWrapper>
                    <RootRouter/>
                </GlobalStyleWrapper>
        </BrowserRouter>
    )
}

export default App;