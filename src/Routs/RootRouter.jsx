import React from 'react';
import {
    Route,
    Routes,
    Navigate,
} from 'react-router-dom';
import MainLayout from 'MainLayout/MainLayout';
import BundlesList from 'Sceens/BundlesList/BundlesList';
import CategoryList from 'Sceens/CategoryList/CategoryList';
import ListsLayout from 'MainLayout/ListsLayout';
import StartPage from 'Sceens/StartPage';
import LoginPage from 'Sceens/LoginPage';
import BundleOfCards from 'Sceens/BundleofCards/BundleOfCards';
import { ROUTES_NAMES } from 'constants/routes/routes';
import StudyPage from 'Sceens/StudyPage';
import Try from 'Sceens/Try';

const RootRouter = () => {
    return (
        <Routes>
            <Route path={ROUTES_NAMES.START_PAGE} element={<MainLayout><StartPage/></MainLayout>}/>

            <Route path={ROUTES_NAMES.LOGIN} element={<LoginPage/>}/>

            <Route path={ROUTES_NAMES.CATEGORIES} element={<ListsLayout/>}>
                <Route index element={<CategoryList/>}/>
                <Route path={':categoryID'} element={<BundlesList/>}/>
                <Route path={'try'} element={<Try/>}></Route>
            </Route>
            <Route path={`${ROUTES_NAMES.CATEGORIES}/:categoryID/bundle/:bundleID`}
                   element={<MainLayout><BundleOfCards/></MainLayout>}/>
            <Route path={`${ROUTES_NAMES.CATEGORIES}/:categoryID/bundle/:bundleID/studying`}
                   element={<MainLayout><StudyPage/></MainLayout>}/>



            <Route path={'*'} element={<Navigate to={'/'}/>}/>
        </Routes>
    );
};

export default RootRouter;