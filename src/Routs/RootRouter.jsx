import React, { useState } from "react";
import {
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import MainLayout from "MainLayout/MainLayout";
import ListOfCardBundles from "Sceens/ListOfCardBundles";
import CategoryList from "Sceens/CategoryList";
import ListsLayout from "MainLayout/ListsLayout";
import BundleOfCards from "Sceens/BundleOfCards/BundleOfCards";
import StartPage from "Sceens/StartPage";
import LoginRouter from "Routs/LoginRouter";
import LoginLayout from "../MainLayout/LoginLayout";
import LoginPage from "../Sceens/LoginPage";

const RootRouter = () => {
    return (
        <Routes>
            <Route index path={'/'} element={<MainLayout><StartPage/></MainLayout>}/>

            <Route path={'/login'} element={<LoginLayout><LoginRouter/></LoginLayout>}/>

            <Route element={<ListsLayout/>}>
                <Route path={'/categoryList'} element={<CategoryList/>}/>
                <Route path={'listOfBundles'} element={<ListOfCardBundles/>}/>
                {/*<Route path={'listOfBundles/:categoryID'} element={<ListOfCardBundles/>}/>*/}
                <Route path={'bundleOfCards'} element={<BundleOfCards/>}/>
            </Route>
            {/*<Route path={'/listOfBundles'} element={<ListsLayout><ListOfCardBundles/></ListsLayout>}/>*/}
            {/*<Route path={'/bundleOfCards'} element={<MainLayout><BundleOfCards/></MainLayout>}/>*/}
            <Route path={'*'} element={<Navigate to={'/categoryList'}/>}/>
        </Routes>
    );
}

export default RootRouter