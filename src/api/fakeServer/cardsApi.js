import fakeServerInstance from "../instance";

export const fetchCardsData = () => fakeServerInstance.get('/cards');