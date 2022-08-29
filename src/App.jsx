import React from "react";
import GlobalStyleWrapper from "./HOC/GlobalThemeWraper";
import RootRouter from "./Routs/RootRouter";
import { BrowserRouter } from "react-router-dom";
import {store} from "store/initStore";

const App = () => {
    return(
        // <Provider store={store}>
            <BrowserRouter>
                <GlobalStyleWrapper>
                    <RootRouter/>
                </GlobalStyleWrapper>
            </BrowserRouter>
        // </Provider>

    )
}

export default App;