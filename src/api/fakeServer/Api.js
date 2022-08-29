import fakeServerInstance from "../instance";

export const fetchCardsData = () => fakeServerInstance.get('/cards');

export const fetchCategoryData = () => fakeServerInstance.get('/categories');

export const fetchBundlesDate  = fakeServerInstance.get('/bundles');