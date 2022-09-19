export const SET_VALID_USER = 'SET_VALID_USER';
export const SET_NOT_VALID_USER = 'SET_NOT_VALID_USER';

export const CREATE_NEW_USER_SUCCESS = 'CREATE_NEW_USER_SUCCESS';
export const CREATE_NEW_USER_ERROR = 'CREATE_NEW_USER_ERROR';

export const setValidUserAction = (value) => {
    return {
        type: SET_VALID_USER,
        payload: value,
    };
};

export const setNotValidUserAction = () => {
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