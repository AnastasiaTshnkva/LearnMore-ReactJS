import {ADD_CATEGORY, CORRECT_CATEGORY, DELETE_CATEGORY} from "../actions/actionsCategories";
import {store} from '../initStore';

function reducerCategories(state, action) {
    switch (action.type) {
        case ADD_CATEGORY: return {value: action.value};
        case DELETE_CATEGORY: return {value: action.value};
        case CORRECT_CATEGORY: return {value: action.value};
        default: return store;
    }
}