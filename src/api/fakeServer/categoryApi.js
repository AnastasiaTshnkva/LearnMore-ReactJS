import fakeServerInstance from "../instance";

export const fetchCategoryData = () => fakeServerInstance.get('/categories');