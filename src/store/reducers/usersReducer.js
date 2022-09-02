import {
    SET_VALID_USER,
    SET_NOT_VALID_USER,
} from 'store/actions/userActionCreators'

const initState = {
    userData: [],
    isLoggedIn: false,
}
const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_VALID_USER:
            return {
                ...state,
                isLoggedIn: true
            };

        case SET_NOT_VALID_USER:
            return {
                ...state,
            };

        default:
            return {
                ...state
            };
    }
}

export default usersReducer;