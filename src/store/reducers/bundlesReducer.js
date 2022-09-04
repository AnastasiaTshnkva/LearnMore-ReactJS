import {
    SET_BUNDLES_REQUEST,
    GET_BUNDLES_SUCCESS,
    GET_BUNDLES_FAILURE,
    CREATE_NEW_BUNDLES,
    DELETE_BUNDLES,
    CORRECT_BUNDLES
} from "../actions/bunldlesActionCreators";

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

        case CREATE_NEW_BUNDLES:
            return {
                ...state,
                bundlesData: action.payload,
            };

        case DELETE_BUNDLES:
            return {
                ...state,
                bundlesData: action.payload,
            };

        case CORRECT_BUNDLES:
            return {
                ...state,
                bundlesData: action.payload,
            }

        default:
            return {...state}
    }
}

export default bundlesReducer;