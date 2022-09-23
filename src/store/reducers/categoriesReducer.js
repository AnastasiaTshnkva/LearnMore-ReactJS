import {
    SET_CATEGORIES_REQUEST,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAILURE,
    CREATE_NEW_CATEGORY_SUCCESSFUL,
    CREATE_NEW_CATEGORY_ERROR,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_ERROR,
    CORRECT_CATEGORY_SUCCESS,
    CORRECT_CATEGORY_ERROR,
} from '../actions/categoriesActionCreators';

const initState = {
    loading: false,
    error: null,
    categoriesData: [],
    }

const categoriesReducer = (state = initState, action) => {
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

        case CREATE_NEW_CATEGORY_SUCCESSFUL:
            return {
                ...state,
                categoriesData: action.payload,
            };

        case CREATE_NEW_CATEGORY_ERROR:
            return {
                ...state,
                error: action.payload,
            };

        case DELETE_CATEGORY_SUCCESS:
            return {
                ...state,
                categoriesData: action.payload,
            };

        case DELETE_CATEGORY_ERROR:
            return {
                ...state,
                error: action.payload,
            };

        case CORRECT_CATEGORY_SUCCESS:
            return {
                ...state,
                categoriesData: action.payload,
            };

        case CORRECT_CATEGORY_ERROR:
            return {
                ...state,
                error: action.payload,
            };

        default:
            return {...state}
    }
}

export default categoriesReducer;

