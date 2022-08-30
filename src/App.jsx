import React from "react";
import GlobalStyleWrapper from "./HOC/GlobalThemeWraper";
import RootRouter from "./Routs/RootRouter";
import { BrowserRouter } from "react-router-dom";
import {store} from "store/initStore";
import LoginRouter from "./Routs/LoginRouter";

const App = () => {
    return(
        // <Provider store={store}>
            <BrowserRouter>
                <GlobalStyleWrapper>
                    <LoginRouter/>
                </GlobalStyleWrapper>
            </BrowserRouter>
        // </Provider>

    )
}

export default App;