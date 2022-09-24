export const SET_USER_REQUEST = 'SET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';

export const SET_VALID_USER = 'SET_VALID_USER';
export const SET_NOT_VALID_USER = 'SET_NOT_VALID_USER';

export const CREATE_NEW_USER_SUCCESS = 'CREATE_NEW_USER_SUCCESS';
export const CREATE_NEW_USER_ERROR = 'CREATE_NEW_USER_ERROR';

export const setUserRequestAction = (value) => {
    return {
        type: SET_USER_REQUEST,
        payload: value,
    };
};

export const getUserSuccessAction = (value) => {
    return {
        type: GET_USER_SUCCESS,
        payload: value,
    };
};

export const getUserErrorAction = (value) => {
    return {
        type: GET_USER_ERROR,
        payload: value,
    };
};

export const setValidUserAction = (value) => {
    return {
        type: SET_VALID_USER,
        payload: value,
    };
};

export const setNotValidUserAction = (value) => {
    return {
        type: SET_NOT_VALID_USER,
        payload: value,
    };
};

export const createNewUserSuccessAction = (value) => {
    return {
        type: CREATE_NEW_USER_SUCCESS,
        payload: value,
    };
};

export const createNewUserErrorAction = (value) => {
    return {
        type: CREATE_NEW_USER_ERROR,
        payload: value,
    };
};