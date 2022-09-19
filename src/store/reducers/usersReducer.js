import {
    SET_VALID_USER,
    SET_NOT_VALID_USER,
    CREATE_NEW_USER_SUCCESS,
    CREATE_NEW_USER_ERROR,
} from 'store/actions/userActionCreators'

const initState = {
    currentUserData: {},
    isLoggedIn: false,
    error: null,
}
const usersReducer = (state = initState, action) => {
    switch (action.type) {
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