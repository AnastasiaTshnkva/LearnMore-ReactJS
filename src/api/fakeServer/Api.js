import fakeServerInstance from "../instance";

export const fetchCardsData = () => fakeServerInstance.get('/cards');

export const fetchCategoryData = () => fakeServerInstance.get('/categories');

export const fetchBundlesDate = (id) => fakeServerInstance.get(`/bundles?categoryID=${id}`);

export const fetchUsersDate = () => fakeServerInstance.get('/users');

export const loginUser = (name, login, password) => fakeServerInstance.post('/login', {name, login, password})