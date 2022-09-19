import fakeServerInstance from '../instance';


//categories
//get
export const fetchCategoryData = () => fakeServerInstance.get('/categories');
//post
export const fetchAddNewCategoryToServer = (newCategory, headers) => fakeServerInstance.post('/categories', newCategory, headers);


//bundles
//get
export const fetchBundlesData = (categoryID) => fakeServerInstance.get(`/bundles/?categoryID=${categoryID}`);
export const fetchCurrentBundleData = (bundleID) => fakeServerInstance.get(`/bundles/?bundleID=${bundleID}`);
export const fetchBundleData = () => fakeServerInstance.get('/bundles');
//post
export const fetchAddNewBundleToServer = (newBundle, headers) => fakeServerInstance.post('/bundles', newBundle, headers);


//cards
//get
export const fetchBundleOfCardsData = (bundleID) => fakeServerInstance.get(`/cards/?bundleID=${bundleID}`);
export const fetchCurrentCardsData = (cardID) => fakeServerInstance.get(`/cards/?cardID=${cardID}`);
export const fetchCardsData = () => fakeServerInstance.get('/cards');
//post
export const fetchAddNewCardToServer = (newCard, headers) => fakeServerInstance.post('/cards', newCard, headers);
//delete
export const fetchDeleteCardFromServer = (cardID) => fakeServerInstance.delete(`/cards/?cardID=${cardID}`);


//users
//get
export const fetchUsersDate = () => fakeServerInstance.get('/users');
export const fetchCurrentUserData = (userID) => fakeServerInstance.get(`/users/&userID=${userID}`);
//post
export const fetchCreateNewUser = (newUser, headers) => fakeServerInstance.post('/users', newUser, headers);