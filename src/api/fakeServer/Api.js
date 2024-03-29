import fakeServerInstance from '../instance';

//categories
//get
export const fetchCategoryData = (userID) => fakeServerInstance.get(`/categories?userID=${userID}`);
//post
export const fetchAddNewCategoryToServer = (newCategory, headers) => fakeServerInstance.post('/categories', newCategory, headers);
//patch
export const fetchPatchCategoryData = (categoryID, newData, headers) => fakeServerInstance.patch(`/categories/${categoryID}`, newData, headers);
//delete
export const fetchDeleteCategoryFromServer = (categoryID) => fakeServerInstance.delete(`/categories/${categoryID}`);


//bundles
//get
export const fetchBundlesData = (categoryID) => fakeServerInstance.get(`/bundles/?categoryID=${categoryID}`);
export const fetchCurrentBundleData = (bundleID) => fakeServerInstance.get(`/bundles/?bundleID=${bundleID}`);
//post
export const fetchAddNewBundleToServer = (newBundle, headers) => fakeServerInstance.post('/bundles', newBundle, headers);
//patch
export const fetchPatchBundleData = (bundleID, newData, headers) => fakeServerInstance.patch(`/bundles/${bundleID}`, newData, headers);
//delete
export const fetchDeleteBundleFromServer = (bundleID) => fakeServerInstance.delete(`/bundles/${bundleID}`);


//cards
//get
export const fetchBundleOfCardsData = (bundleID) => fakeServerInstance.get(`/cards/?bundleID=${bundleID}`);
export const fetchCardsData = () => fakeServerInstance.get('/cards');
//post
export const fetchAddNewCardToServer = (newCard, headers) => fakeServerInstance.post('/cards', newCard, headers);
//patch
export const fetchPatchCardData = (cardID, newData, headers) => fakeServerInstance.patch(`cards/${cardID}`, newData, headers);
//delete
export const fetchDeleteCardFromServer = (cardID) => fakeServerInstance.delete(`/cards/${cardID}`);


//users
//get
export const fetchUsersDate = () => fakeServerInstance.get('/users');
export const fetchCurrentUserData = (userID) => fakeServerInstance.get(`/users?id=${userID}`);
//post
export const fetchCreateNewUser = (newUser, headers) => fakeServerInstance.post('/users', newUser, headers);
