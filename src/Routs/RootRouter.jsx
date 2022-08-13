import React, {useContext, useState} from "react";
import PropTypes from 'prop-types';
import {Route, Routes, Outlet, Navigate, useLocation} from "react-router-dom";
import Login from "Sceens/Login";
import LearningMemoryCards from "Sceens/LearningMemoryCards";
import MainLayout from "MainLayout/MainLayout";
import LoginLayout from "MainLayout/LoginLayout";
import ListOfCardBundles from "Sceens/ListOfCardBundles";
import CategoryList from "Sceens/CategoryList";

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
            {/*<Route path={'/login'} element={renderForGuestUser(<LoginLayout><Login/></LoginLayout>)}/>*/}
            <Route path={'/login'} element={<LoginLayout><Login/></LoginLayout>}/>
            <Route path={'/category_list'} element={<MainLayout><CategoryList/></MainLayout>}/>
            <Route path={'/list_of_bundles'} element={<MainLayout><ListOfCardBundles/></MainLayout>}/>
            <Route path={'/list'} element={<MainLayout><LearningMemoryCards/></MainLayout>}/>

            <Route path={'*'} element={<Navigate to={'/login'}/>}/>
        </Routes>
    );
}

RootRouter.propTypes = {};
RootRouter.default = {};

export default RootRouter;