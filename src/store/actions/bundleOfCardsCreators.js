export const SET_BUNDLE_OF_CARDS_REQUEST = "SET_BUNDLE_OF_CARDS_REQUEST";
export const GET_BUNDLE_OF_CARDS_SUCCESS = "GET_BUNDLE_OF_CARDS_SUCCESS";
export const GET_BUNDLE_OF_CARDS_FAILURE = "GET_BUNDLE_OF_CARDS_FAILURE";

export const SET_CURRENT_BUNDLE_REQUEST = "SET_CURRENT_BUNDLE_REQUEST";
export const GET_CURRENT_BUNDLE_SUCCESS = "GET_CURRENT_BUNDLE_SUCCESS";
export const GET_CURRENT_BUNDLE_FAILURE = "GET_CURRENT_BUNDLE_FAILURE";

export const CREATE_NEW_CARD_SUCCESS = "CREATE_NEW_CARD_SUCCESS";
export const CREATE_NEW_CARD_ERROR = "CREATE_NEW_CARD_ERROR";

export const DELETE_CARD_SUCCESS = "DELETE_CARD_SUCCESS";
export const DELETE_CARD_ERROR = "DELETE_CARD_ERROR";

export const CORRECT_CARD = "CORRECT_CARD";
export const CORRECT_BUNDLE = "CORRECT_BUNDLE";


export const setBundleOfCardsRequestAction = () => {
    return {
        type: SET_BUNDLE_OF_CARDS_REQUEST
    };
};

export const getBundleOfCardSuccessAction = (value) => {
    return {
        type: GET_BUNDLE_OF_CARDS_SUCCESS,
        payload: value,
    };
};

export const getBundleOfCardFailureAction = (value) => {
    return {
        type: GET_BUNDLE_OF_CARDS_FAILURE,
        payload: value,
    };
};

export const setCurrentBundleRequestAction = () => {
    return {
        type: SET_CURRENT_BUNDLE_REQUEST
    };
};

export const getCurrentBundleSuccessAction = (value) => {
    return {
        type: GET_CURRENT_BUNDLE_SUCCESS,
        payload: value,
    };
};

export const getCurrentBundleFailureAction = (value) => {
    return {
        type: GET_CURRENT_BUNDLE_FAILURE,
        payload: value,
    };
};

export const createNewCardSuccessAction = (value) => {
    return {
        type: CREATE_NEW_CARD_SUCCESS,
        payload: value
    };
};

export const createNewCardErrorAction = (value) => {
    return {
        type: CREATE_NEW_CARD_ERROR,
        payload: value
    };
};

export const deleteCardSuccessAction = (value) => {
    return{
        type: DELETE_CARD_SUCCESS,
        payload: value,
    }
};

export const deleteCardErrorAction = (value) => {
    return{
        type: DELETE_CARD_ERROR,
        payload: value,
    }
};

export const correctCardAction = (value) => ({
    type: CORRECT_CARD,
    payload: value,
});

export const correctBundleAction = (value) => {
    return {
        type: CORRECT_BUNDLE,
        payload: value,
    }
};