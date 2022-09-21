// user selectors
export const showUserData = (state) => state.users.currentUserData;
export const showIsUserLoggedIn = (state) => state.users.isLoggedIn;


//categories selectors
export const showCategoriesDataIsLoading = (state) => state.categories.loading;
export const showCategoriesDataError = (state) => state.categories.error;
export const showCategoriesDataFromStore = (state) => state.categories.categoriesData;


//bundles data
export const showBundlesDataIsLoading = (state) => state.bundles.loading;
export const showBundlesDataError = (state) => state.bundles.error;
export const showBundlesFromStore = (state) => state.bundles;
//current bundleData
export const showCurrentBundleDataIsLoading = (state) => state.bundleOfCards.currentBundleLoading;
export const showCurrentBundleDataError = (state) => state.bundleOfCards.currentBundleError;
export const showCurrentBundleDataFromStore = (state) => state.bundleOfCards.currentBundleData;


//cards data
export const showCardsDataIsLoading = (state) => state.bundleOfCards.cardsLoading;
export const showCardsDataError = (state) => state.bundleOfCards.cardsError;
export const showCardsDataFromStore = (state) => state.bundleOfCards.cardsData;
//current card data
export const showCurrentCardDataIsLoading = (state) => state.bundleOfCards.currentCardLoading;
export const showCurrentCardDataError = (state) => state.bundleOfCards.currentCardError;
export const showCurrentCardDataFromStore = (state) => state.bundleOfCards.currentCardData;