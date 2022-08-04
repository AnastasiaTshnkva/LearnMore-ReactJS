import React, {useContext} from "react";
import PropTypes from 'prop-types';
import { Route, Routes, Outlet, Navigate} from "react-router-dom";

const RootRouter = () => {
    const user = useContext();

    const renderLoginForGuestUser = (Scene) => {
        if (user.isLoggedIn) {
            return <Scene/>
        } else {
            return <Navigate to={'/list'}/>
        }
    }

    return (
        <Routes>
            <Route path={'/guest'} element={renderLoginForGuestUser(Login)}/>
            <Route path={'/login'} element={renderLoginForGuestUser(Login)}/>
            <Route path={'/'} element={<React.Fragment><Outlet/></React.Fragment>}>
                <Route path={'/list'} element={<list>ghjkl</list>}></Route>
                </Route>
        </Routes>

    )
}

RootRouter.propTypes = {};
RootRouter.default = {};

export default RootRouter;