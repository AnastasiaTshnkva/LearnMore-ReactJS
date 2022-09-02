import React, { useState } from "react";
import {
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import MainLayout from "MainLayout/MainLayout";
import BundlesList from "Sceens/BundlesList";
import CategoryList from "Sceens/CategoryList";
import ListsLayout from "MainLayout/ListsLayout";
import StartPage from "Sceens/StartPage";
import LoginRouter from "Routs/LoginRouter";
import LoginLayout from "../MainLayout/LoginLayout";
import LoginPage from "../Sceens/LoginPage";
import {useSelector} from "react-redux";

const RootRouter = () => {
    const isUserLoggedIn = useSelector((state) => {
        return {
            userLoggedIn: state.users.isLoggedIn,
        };
    });

    return (
        // if(isUserLoggedIn){
        //
        // }
    // )

        <Routes>
            <Route path={'/'} element={<MainLayout><StartPage/></MainLayout>}/>

            <Route path={'/login'} element={<LoginLayout><LoginPage/></LoginLayout>}/>

            <Route path={'/categoryList'} element={<ListsLayout/>}>
                <Route index element={<CategoryList/>}/>
                <Route path={'listOfBundles'} element={<BundlesList/>}/>
                {/*<Route path={'/:categoryID'} element={<BundlesList/>}/>*/}
                {/*<Route path={'bundleOfCards'} element={<BundleOfCards/>}/>*/}
            </Route>
            {/*<Route path={'/listOfBundles'} element={<ListsLayout><ListOfCardBundles/></ListsLayout>}/>*/}
            {/*<Route path={'/bundleOfCards'} element={<MainLayout><BundleOfCards/></MainLayout>}/>*/}
            <Route path={'*'} element={<Navigate to={'/'}/>}/>
        </Routes>
    );
};

export default RootRouter