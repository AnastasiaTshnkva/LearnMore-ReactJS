import StartPage from "Sceens/StartPage";
import LoginRouter from "Routs/LoginRouter";
import CategoryList from "Sceens/CategoryList";
import BundlesList from "Sceens/BundlesList";
import BundleOfCards from "Sceens/BundleOfCards/BundleOfCards";

export const routesNames = {
    startPage: '/',
    login: '/login',
    categories: '/categoryList',
    categoryPage: '/categoryList/:categoryId',
    bundlePage: '/categoryList/:categoryId/:bundleId',
};

export const routesForLoggedInUser = [
    {
        path: routesNames.startPage,
        element: <StartPage/>,
        exact: false,
    },
    {
        path: routesNames.login,
        element: <LoginRouter/>,
        exact: false,
    },
    {
        path: routesNames.categories,
        element: <CategoryList/>,
        exact: true,
    },
    {
        path: routesNames.categoryPage,
        element: <BundlesList/>,
        exact: true,
    },
    {
        path: routesNames.bundlePage,
        element: <BundleOfCards/>,
        exact: true,
    },
];

export const routesForLoggedInUser = [
    {
        path: routesNames.startPage,
        element: <StartPage/>,
    },
    {
        path: routesNames.login,
        element: <LoginRouter/>,
    },
];

