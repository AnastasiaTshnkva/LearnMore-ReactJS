import React, {useContext, useState} from "react";
import {Route, Routes, Outlet, Navigate, useLocation} from "react-router-dom";
import LoginPage from "Sceens/LoginPage";
import LoginLayout from "MainLayout/LoginLayout";
import RootRouter from "./RootRouter";


const LoginRouter = () => {
    const userLoggedIn = true;

    const renderForLoggedInUser = (Scene) => {
        if(userLoggedIn) {
            return Scene
        }
        return <Navigate to={'/login'}/>
    }

    return (
        <Routes>
            <Route index path={'/login'} element={<LoginLayout><LoginPage/></LoginLayout>}></Route>
            <Route path={'/*'} element={renderForLoggedInUser(<RootRouter/>)}></Route>
        </Routes>
    )
}

export default LoginRouter;