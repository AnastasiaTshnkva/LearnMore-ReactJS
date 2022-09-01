export const SET_VALID_USER = "SET_VALID_USER";
export const SET_NOT_VALID_USER = "SET_NOT_VALID_USER";

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