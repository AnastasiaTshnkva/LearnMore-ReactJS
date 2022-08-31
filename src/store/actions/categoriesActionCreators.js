export const SET_CATEGORIES_REQUEST = "SET_CATEGORIES_REQUEST";
export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";
export const GET_CATEGORIES_FAILURE = "GET_CATEGORIES_FAILURE";

export const CREATE_NEW_CATEGORY = "CREATE_NEW_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const CORRECT_CATEGORY = "CORRECT_CATEGORY";

export const setCategoriesRequestAction = () => {
    return {
        type: SET_CATEGORIES_REQUEST
    }
};

export const getCategoriesSuccessAction = (value) => {
    return {
        type: GET_CATEGORIES_SUCCESS,
        payload: value,
    }
}

export const getCategoriesFailureAction = (value) => {
    return {
        type: GET_CATEGORIES_FAILURE,
        payload: value,
    }
}

export const createNewCategoriesAction = (value) => {
    return {
        type: CREATE_NEW_CATEGORY,
        payload: value
    }
}

export const deleteCategoryAction = (value) => ({
    type: DELETE_CATEGORY,
    payload: value,
})

export const correctCategoryAction = (value) => ({
    type: CORRECT_CATEGORY,
    payload: value,
})