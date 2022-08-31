import {combineReducers} from "redux";
import usersReducer from "./usersReducer";
import categoriesReducer from "./categoriesReducer";

const RootReducer = combineReducers({
    users: usersReducer,
    categories: categoriesReducer,
    }
)
export default RootReducer;