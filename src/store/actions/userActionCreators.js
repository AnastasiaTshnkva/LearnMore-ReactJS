export const SET_VALID_USER = 'SET_VALID_USER';
export const SET_NOT_VALID_USER = 'SET_NOT_VALID_USER';

export const setValidUserAction = (value) => {
    return {
        type: SET_VALID_USER,
        payload: value,
    };
};

export const setNotValidUserAction = () => {
    return {
        type: SET_NOT_VALID_USER,
    };
};