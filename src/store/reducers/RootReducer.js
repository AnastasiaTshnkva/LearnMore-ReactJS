import {combineReducers} from "redux";
import usersReducer from "./usersReducer";
import categoriesReducer from "./categoriesReducer";
import bundlesReducer from "./bundlesReducer";

const RootReducer = combineReducers({
    users: usersReducer,
    categories: categoriesReducer,
    bundles: bundlesReducer,
    }
);

export default RootReducer;