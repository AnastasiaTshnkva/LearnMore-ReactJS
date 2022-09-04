import {combineReducers} from "redux";
import usersReducer from "./usersReducer";
import categoriesReducer from "./categoriesReducer";
import bundlesReducer from "./bundlesReducer";
import bundleOfCardsReducer from "./bundleOfCardsReducer";

const RootReducer = combineReducers({
    users: usersReducer,
    categories: categoriesReducer,
    bundles: bundlesReducer,
    bundleOfCards: bundleOfCardsReducer,
    }
);

export default RootReducer;