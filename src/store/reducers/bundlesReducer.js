import {
    SET_BUNDLES_REQUEST,
    GET_BUNDLES_SUCCESS,
    GET_BUNDLES_FAILURE,
    CREATE_NEW_BUNDLE_SUCCESS,
    CREATE_NEW_BUNDLE_ERROR,
    DELETE_BUNDLE_SUCCESS,
    DELETE_BUNDLE_ERROR
} from '../actions/bunldlesActionCreators';

const initState = {
    loading: false,
    error: null,
    bundlesData: [],
}

const bundlesReducer = (state=initState, action) => {
    switch (action.type) {
        case SET_BUNDLES_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case GET_BUNDLES_SUCCESS:
            return {
                ...state,
                loading: false,
                bundlesData: action.payload,
            };

        case GET_BUNDLES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case CREATE_NEW_BUNDLE_SUCCESS:
            return {
                ...state,
                bundlesData: action.payload,
            };

        case CREATE_NEW_BUNDLE_ERROR:
            return {
                ...state,
                error: action.payload,
            };


        case DELETE_BUNDLE_SUCCESS:
            return {
                ...state,
                bundlesData: action.payload,
            };

        case DELETE_BUNDLE_ERROR:
            return {
                ...state,
                error: action.payload,
            };

        default:
            return {...state};
    }
}

export default bundlesReducer;