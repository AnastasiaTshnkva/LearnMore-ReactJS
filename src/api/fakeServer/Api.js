import fakeServerInstance from "../instance";

export const fetchCardsData = () => fakeServerInstance.get('/cards');

export const fetchCategoryData = () => fakeServerInstance.get('/categories');

export const fetchBundlesDate = () => fakeServerInstance.get('/bundles');

export const fetchUsersDate = () => fakeServerInstance.get('/users');

export const loginUser = (name, login, password) => fakeServerInstance.post('/login', {name, login, password})