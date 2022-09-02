export const SET_USERS_REQUEST = 'SET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

export const SET_VALID_USER = 'SET_VALID_USER';
export const SET_NOT_VALID_USER = 'SET_NOT_VALID_USER';

export const setValidUserAction = () => {
    return {
        type: SET_VALID_USER,
    };
};

export const setNotValidUserAction = () => {
    return {
        type: SET_NOT_VALID_USER,
    };
};