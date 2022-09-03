import React, { useState } from "react";
import {
    Route,
    Routes,
    Navigate, useParams,
} from "react-router-dom";
import { Redirect } from 'react-router-dom';
import MainLayout from "MainLayout/MainLayout";
import BundlesList from "Sceens/BundlesList";
import CategoryList from "Sceens/CategoryList";
import ListsLayout from "MainLayout/ListsLayout";
import StartPage from "Sceens/StartPage";
import LoginRouter from "Routs/LoginRouter";
import LoginPage from "../Sceens/LoginPage";
import {useSelector} from "react-redux";
import BundleOfCards from "Sceens/BundleOfCards/BundleOfCards";

const RootRouter = () => {
    const { param } =  useParams();
    console.log(param);

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout><StartPage/></MainLayout>}/>

            <Route path={'/login'} element={<LoginPage/>}/>

            <Route path={'/categoryList'} element={<ListsLayout/>}>
                <Route index element={<CategoryList/>}/>
                <Route path={':param'} element={<BundlesList/>}/>
                {/*<Route path={'/:categoryID'} element={<BundlesList/>}/>*/}
                <Route path={'bundleOfCards'} element={<BundleOfCards/>}/>
            </Route>
            <Route path={'/bundleOfCards'} element={<BundleOfCards/>}/>
            {/*<Route path={'/listOfBundles'} element={<ListsLayout><ListOfCardBundles/></ListsLayout>}/>*/}
            {/*<Route path={'/bundleOfCards'} element={<MainLayout><BundleOfCards/></MainLayout>}/>*/}
            <Route path={'*'} element={<Navigate to={'/'}/>}/>
        </Routes>
    );
};

export default RootRouter;