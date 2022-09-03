//user selectors
// export const userData = (state) => state.users.currentUserData;
// export const isUserLoggedIn = (state) => state.users.isLoggedIn;

//categories selectors
import {useSelector} from "react-redux";

// export const categoriesDataIsLoading = (state) => state.categories.loading;
// export const categoriesDataIsFailure = (state) => state.categories.error;
export const showCategoriesDataFromStore = (state) => state.categories.categoriesData;

//bundles data
// export const bundlesDataIsLoading = (state) => state.bundles.loading;
// export const bundlesDataIsFailure = (state) => state.bundles.error;
export const bundlesFromStore = (state) => state.bundles;