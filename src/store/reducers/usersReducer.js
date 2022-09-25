import {
    SET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_ERROR,
    SET_VALID_USER,
    SET_NOT_VALID_USER,
    SET_USER_LOG_OUT,
    CREATE_NEW_USER_SUCCESS,
    CREATE_NEW_USER_ERROR,
} from 'store/actions/userActionCreators'

const initState = {
    loading: false,
    currentUserData: {},
    isLoggedIn: false,
    error: null,
}
const usersReducer = (state = initState, action) => {
    switch (action.type) {

        case SET_USER_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUserData: action.payload,
            };

        case GET_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case SET_VALID_USER:
            return {
                ...state,
                currentUserData: action.payload,
                isLoggedIn: true,
            };

        case SET_NOT_VALID_USER:
            return {
                ...state,
                error: action.payload,
            };

        case SET_USER_LOG_OUT:
            return {
                ...state,
                isLoggedIn: false,
            };



        case CREATE_NEW_USER_SUCCESS:
            return {
                ...state,
                currentUserData: action.payload,
                isLoggedIn: true,
            };

        case CREATE_NEW_USER_ERROR:
            return {
                ...state,
                error: action.payload,
            };

        default:
            return {
                ...state
            };
    }
}

export default usersReducer;