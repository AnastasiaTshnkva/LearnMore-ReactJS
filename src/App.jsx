import React from "react";
import GlobalStyleWrapper from "./HOC/GlobalThemeWraper";
import RootRouter from "./Routs/RootRouter";
import { BrowserRouter } from "react-router-dom";
import {store} from "store/initStore";
import LoginRouter from "./Routs/LoginRouter";
import {Provider} from 'react-redux'
import MainLayout from "./MainLayout/MainLayout";
import GlobalModalProvider from "./HOC/GlobalModalProvider";

const App = () => {
    return(
        <Provider store={store}>
            <BrowserRouter>
                {/*<GlobalModalProvider>*/}
                <GlobalStyleWrapper>
                        <RootRouter/>
                </GlobalStyleWrapper>
                {/*</GlobalModalProvider>*/}
            </BrowserRouter>
        </Provider>

    )
}

export default App;