export const SET_CATEGORIES_REQUEST = 'SET_CATEGORIES_REQUEST';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_FAILURE = 'GET_CATEGORIES_FAILURE';

export const CREATE_NEW_CATEGORY_SUCCESSFUL = 'CREATE_NEW_CATEGORY_SUCCESSFUL';
export const CREATE_NEW_CATEGORY_ERROR = 'CREATE_NEW_CATEGORY_ERROR';

export const DELETE_CATEGORY_SUCCESS = 'DELETE_CATEGORY_SUCCESS';
export const DELETE_CATEGORY_ERROR = 'DELETE_CATEGORY_ERROR';

export const CORRECT_CATEGORY_SUCCESS = 'CORRECT_CATEGORY_SUCCESS';
export const CORRECT_CATEGORY_ERROR = 'CORRECT_CATEGORY_ERROR';

export const setCategoriesRequestAction = () => {
    return {
        type: SET_CATEGORIES_REQUEST
    };
};

export const getCategoriesSuccessAction = (value) => {
    return {
        type: GET_CATEGORIES_SUCCESS,
        payload: value,
    };
};

export const getCategoriesFailureAction = (value) => {
    return {
        type: GET_CATEGORIES_FAILURE,
        payload: value,
    };
};

export const createNewCategorySuccessfulAction = (value) => {
    return {
        type: CREATE_NEW_CATEGORY_SUCCESSFUL,
        payload: value
    }
};

export const createNewCategoryErrorAction = (value) => {
    return {
        type: CREATE_NEW_CATEGORY_ERROR,
        payload: value
    }
};

export const deleteCategorySuccessAction = (value) => {
    return {
        type: DELETE_CATEGORY_SUCCESS,
        payload: value,
    };
};

export const deleteCategoryErrorsAction = (value) => {
    return {
        type: DELETE_CATEGORY_ERROR,
        payload: value,
    };
};


export const correctCategorySuccessAction = (value) => {
    return {
        type: CORRECT_CATEGORY_SUCCESS,
        payload: value,
    };
};

export const correctCategoryErrorAction = (value) => {
    return {
        type: CORRECT_CATEGORY_ERROR,
        payload: value,
    };
};