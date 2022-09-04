import fakeServerInstance from "../instance";

//category
export const fetchCategoryData = () => fakeServerInstance.get('/categories');

//bundle
export const fetchBundlesData = (categoryID) => fakeServerInstance.get(`/bundles/?categoryID=${categoryID}`);
export const fetchCurrentBundleData = (bundleID) => fakeServerInstance.get(`/bundles/?bundleID=${bundleID}`);
export const fetchBundleData = () => fakeServerInstance.get('/bundles');

//cards
export const fetchBundleOfCardsData = (bundleID) => fakeServerInstance.get(`/cards/?bundlesID=${bundleID}`);
export const fetchCurrentCardsData = (cardID) => fakeServerInstance.get(`/cards/?cardID=${cardID}`);
export const fetchCardsData = () => fakeServerInstance.get('/cards');


//users
export const fetchUsersDate = () => fakeServerInstance.get('/users');
export const loginUser = (name, login, password) => fakeServerInstance.post('/login', {name, login, password})