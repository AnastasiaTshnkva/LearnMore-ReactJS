import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "Sceens/LoginPage";
import LoginLayout from "MainLayout/LoginLayout";
import RootRouter from "./RootRouter";
import { connect } from "react-redux";


const LoginRouter = ({userLoggedIn}) => {
    // const location = useLocation()
    // gotUserStartPage = () => {
    //     if(storedLocation) return storedLocation
    // }

    const renderForLoggedInUser = (Scene) => {
        if(userLoggedIn) return Scene
        return <Navigate to={'/login'}/>
    }
    const renderForNotLoggedInUser = (Scene) => {
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

const mapStateToProps = function (state) {
    return {
        userLoggedIn: state.users.isLoggedIn,
    };
};

export default connect(mapStateToProps)(LoginRouter);
