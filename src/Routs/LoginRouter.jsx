import React, {useContext, useState} from "react";
import {Route, Routes, Outlet, Navigate, useLocation} from "react-router-dom";
import LoginPage from "Sceens/LoginPage";
import LoginLayout from "MainLayout/LoginLayout";
import RootRouter from "./RootRouter";
import {useSelector} from "react-redux";
import {isLoggedIn} from 'store/selectors/userSelectors'


const LoginRouter = () => {
    const userLoggedIn = useSelector(isLoggedIn);
    const location = useLocation()

    // gotUserStartPage = () => {
    //     if(storedLocation) return storedLocation
    // }

    const renderForLoggedInUser = (Scene) => {
        if(userLoggedIn) return Scene
        return <Navigate to={'/login'}/>
    }
    const renderForNotLoggedInUser = (Scene) => {
        // dispatch({type: 'loginRedirect', payload: location})
        if(!userLoggedIn) return Scene
        return <Navigate to={'/category_list'}/>
    }

    return (
        <Routes>
            <Route index path={'/login'} element={renderForNotLoggedInUser(<LoginLayout><LoginPage/></LoginLayout>)}></Route>
            <Route path={'/*'} element={renderForLoggedInUser(<RootRouter/>)}></Route>
        </Routes>
    )
}

export default LoginRouter;