import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginPage from 'Sceens/LoginPage';
import RootRouter from "./RootRouter";
import CategoryList from 'Sceens/CategoryList/CategoryList';


const LoginRouter = () => {
    console.log('isUserLoggedIn is' ,isUserLoggedIn);

    const renderForLoggedInUser = (Scene) => {
        if(isUserLoggedIn) {
            return Scene
        } else {
            return <Navigate to={'/login'}/>
        }
    };

    const renderForNotLoggedInUser = (Scene) => {
        if(!isUserLoggedIn) {
            return Scene
        } else {
            return <Navigate to={'/categoryList'}/>
        }
    };

    return (
        <Routes>
            <Route path={'/login'} element={renderForNotLoggedInUser(<LoginPage/>)}/>
            <Route path={'/*'} element={renderForLoggedInUser(<CategoryList/>)}/>
        </Routes>
    );
};

export default LoginRouter;
