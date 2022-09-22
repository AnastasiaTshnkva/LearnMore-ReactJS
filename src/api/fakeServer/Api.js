import fakeServerInstance from '../instance';
import bundleData from "../../Sceens/BundleofCards/Components/BundleData";


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
export const fetchCurrentUserData = (userID) => fakeServerInstance.get(`/users/&userID=${userID}`);
//post
export const fetchCreateNewUser = (newUser, headers) => fakeServerInstance.post('/users', newUser, headers);
