import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "Sceens/LoginPage";
import LoginLayout from "MainLayout/LoginLayout";
import RootRouter from "./RootRouter";

const LoginRouter = () => {
    const isUserLoggedIn = useSelector(state => {
        return {
            userLoggedIn: state.users.isLoggedIn,
        };
    });

    const renderForLoggedInUser = (Scene) => {
        if(isUserLoggedIn.userLoggedIn) return Scene
        return <Navigate to={'/login'}/>
    };

    const renderForNotLoggedInUser = (Scene) => {
        if(!isUserLoggedIn.userLoggedIn) return Scene
        return <Navigate to={'/categoryList'}/>
    };

    return (
        <Routes>
            <Route index path={'/login'} element={renderForNotLoggedInUser(<LoginLayout><LoginPage/></LoginLayout>)}></Route>
            <Route path={'/*'} element={renderForLoggedInUser(<RootRouter/>)}></Route>
        </Routes>
    );
};

export default LoginRouter;
