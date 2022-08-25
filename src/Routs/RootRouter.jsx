import React, {useContext, useState} from "react";
import PropTypes from 'prop-types';
import {Route, Routes, Outlet, Navigate, useLocation} from "react-router-dom";
import Login from "Sceens/Login";
import LearningMemoryCards from "Sceens/LearningMemoryCards";
import MainLayout from "MainLayout/MainLayout";
import LoginLayout from "MainLayout/LoginLayout";
import ListOfCardBundles from "Sceens/ListOfCardBundles";
import CategoryList from "Sceens/CategoryList";
import ListsLayout from "MainLayout/ListsLayout";
import BundleOfCards from "../Sceens/BundleOfCards/BundleOfCards";

const RootRouter = () => {
    // let user = useContext();
    const user = false;
    const [redirectLocation, useRedirectLocation] = useState();
    const {location} = useLocation();

    const renderForGuestUser = (Scene) => {
        if(!user) {
            return Scene
        } else {

           return <Navigate to={redirectLocation || '/list'}/>
        }
    }

    const renderForLoggedInUser = (Scene) => {
        if(user) {
            return Scene
        } else {
            setRedirectLocation(location);
            return <Navigate to={'/guest'}/>
        }
    }

    return (
        <Routes>
            <Route path={'/login'} element={<LoginLayout><Login/></LoginLayout>}>
            </Route>
            <Route path={'/category_list'} element={<ListsLayout><CategoryList/></ListsLayout>}/>
            <Route path={'/list_of_bundles'} element={<ListsLayout><ListOfCardBundles/></ListsLayout>}/>
            <Route path={'/bundles_of_cards'} element={<MainLayout><BundleOfCards/></MainLayout>}/>
            <Route path={'/list'} element={<MainLayout><LearningMemoryCards/></MainLayout>}/>

            <Route path={'*'} element={<Navigate to={'/category_list'}/>}/>
        </Routes>
    );
}

RootRouter.propTypes = {};
RootRouter.default = {};

export default RootRouter;