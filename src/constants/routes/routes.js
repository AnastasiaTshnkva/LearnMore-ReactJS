import React from "react";
import StartPage from "Sceens/StartPage";
import LoginRouter from "Routs/LoginRouter";
import CategoryList from "Sceens/CategoryList";
import BundlesList from "Sceens/BundlesList";
import BundleOfCards from "Sceens/BundleOfCards/BundleOfCards";

export const ROUTES_NAMES = {
    START_PAGE: '/',
    LOGIN: '/login',
    CATEGORIES: '/categoryList',
    CATEGORY_PAGE: '/categoryList/:categoryId',
    BUNDLE_PAGE: '/categoryList/:categoryId/:bundleId',
};

export const routesForLoggedInUser = [
    {
        path: ROUTES_NAMES.START_PAGE,
        element: <StartPage/>,
        exact: false,
    },
    // {
    //     path: ROUTES_NAMES.LOGIN,
    //     element: <LoginRouter/>,
    //     exact: false,
    // },
    {
        path: ROUTES_NAMES.CATEGORIES,
        element: <CategoryList/>,
        exact: true,
    },
    {
        path: ROUTES_NAMES.CATEGORY_PAGE,
        element: <BundlesList/>,
        exact: true,
    },
    {
        path: ROUTES_NAMES.BUNDLE_PAGE,
        element: <BundleOfCards/>,
        exact: true,
    },
];

export const routesForLoggedOutUser = [
    {
        path: ROUTES_NAMES.START_PAGE,
        element: <StartPage/>,
        exact: false,
    },
    {
        path: ROUTES_NAMES.LOGIN,
        element: <LoginRouter/>,
        exact: false,
    },
];

