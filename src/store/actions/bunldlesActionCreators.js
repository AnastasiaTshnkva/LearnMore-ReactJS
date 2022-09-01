export const SET_BUNDLES_REQUEST = "SET_BUNDLES_REQUEST";
export const GET_BUNDLES_SUCCESS = "GET_BUNDLES_SUCCESS";
export const GET_BUNDLES_FAILURE = "GET_BUNDLES_FAILURE";

export const CREATE_NEW_BUNDLES = "CREATE_NEW_BUNDLES";
export const DELETE_BUNDLES = "DELETE_BUNDLES";
export const CORRECT_BUNDLES = "CORRECT_BUNDLES";

export const setBundlesRequestAction = () => {
    return {
        type: SET_BUNDLES_REQUEST
    }
};

export const getBundlesSuccessAction = (value) => {
    return {
        type: GET_BUNDLES_SUCCESS,
        payload: value,
    }
}

export const getBundlesFailureAction = (value) => {
    return {
        type: GET_BUNDLES_FAILURE,
        payload: value,
    }
}

export const createNewBundlesAction = (value) => {
    return {
        type: CREATE_NEW_BUNDLES,
        payload: value
    }
}

export const deleteBundleAction = (value) => ({
    type: DELETE_BUNDLES,
    payload: value,
})

export const correctBundleAction = (value) => ({
    type: CORRECT_BUNDLES,
    payload: value,
})