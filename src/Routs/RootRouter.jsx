import React from "react";
import {
    Route,
    Routes,
    Navigate,
    useParams,
} from "react-router-dom";
import MainLayout from "MainLayout/MainLayout";
import BundlesList from "Sceens/BundlesList";
import CategoryList from "Sceens/CategoryList";
import ListsLayout from "MainLayout/ListsLayout";
import StartPage from "Sceens/StartPage";
import LoginPage from "Sceens/LoginPage";
import BundleOfCards from "Sceens/BundleOfCards/BundleOfCards";
import { ROUTES_NAMES } from 'constants/routes/routes';

const RootRouter = () => {
    const { param } =  useParams();
    console.log(param);

    return (
        <Routes>
            <Route path={ROUTES_NAMES.START_PAGE} element={<MainLayout><StartPage/></MainLayout>}/>

            <Route path={ROUTES_NAMES.LOGIN} element={<LoginPage/>}/>

            <Route path={ROUTES_NAMES.CATEGORIES} element={<ListsLayout/>}>
                <Route index element={<CategoryList/>}/>
                <Route path={':param'} element={<BundlesList/>}>
                    <Route path={'bundle/:param'} element={<BundleOfCards/>}/>
                </Route>

            </Route>
            {/*<Route path={'/bundleOfCards'} element={<BundleOfCards/>}/>*/}
            {/*<Route path={'/listOfBundles'} element={<ListsLayout><ListOfCardBundles/></ListsLayout>}/>*/}
            {/*<Route path={'/bundleOfCards'} element={<MainLayout><BundleOfCards/></MainLayout>}/>*/}
            <Route path={'*'} element={<Navigate to={'/'}/>}/>
        </Routes>
    );
};

export default RootRouter;