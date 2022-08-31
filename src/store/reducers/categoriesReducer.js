import {
    SET_CATEGORIES_REQUEST,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAILURE,
    CREATE_NEW_CATEGORY,
    DELETE_CATEGORY,
    CORRECT_CATEGORY,
} from "../actions/categoriesActionCreators";

const initState = {
    loading: false,
    error: null,
    categoriesData: [],
    }

const categoriesReducer = (state=initState, action) => {
    switch (action.type) {
        case SET_CATEGORIES_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                categoriesData: action.payload,
            };

        case GET_CATEGORIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case CREATE_NEW_CATEGORY:
            return {
                ...state,
                categoriesData: action.payload,
            };

        case DELETE_CATEGORY:
            return {
                ...state,
                categoriesData: action.payload,
            };

        case CORRECT_CATEGORY:
            return {
                ...state,
                categoriesData: action.payload,
            }

        default:
            return {...state}
    }
}

export default categoriesReducer;

