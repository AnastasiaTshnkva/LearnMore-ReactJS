export const SET_BUNDLES_REQUEST = 'SET_BUNDLES_REQUEST';
export const GET_BUNDLES_SUCCESS = 'GET_BUNDLES_SUCCESS';
export const GET_BUNDLES_FAILURE = 'GET_BUNDLES_FAILURE';

export const CREATE_NEW_BUNDLE_SUCCESS = 'CREATE_NEW_BUNDLE_SUCCESS';
export const CREATE_NEW_BUNDLE_ERROR = 'CREATE_NEW_BUNDLE_ERROR';

export const DELETE_BUNDLE_SUCCESS = 'DELETE_BUNDLE_SUCCESS';
export const DELETE_BUNDLE_ERROR = 'DELETE_BUNDLE_ERROR';

export const setBundlesRequestAction = () => {
    return {
        type: SET_BUNDLES_REQUEST
    };
};

export const getBundlesSuccessAction = (value) => {
    return {
        type: GET_BUNDLES_SUCCESS,
        payload: value,
    };
};

export const getBundlesFailureAction = (value) => {
    return {
        type: GET_BUNDLES_FAILURE,
        payload: value,
    };
};

export const createNewBundleSuccessAction = (value) => {
    return {
        type: CREATE_NEW_BUNDLE_SUCCESS,
        payload: value
    };
};

export const createNewBundleErrorAction = (value) => {
    return {
        type: CREATE_NEW_BUNDLE_ERROR,
        payload: value
    };
};

export const deleteBundleSuccessAction = (value) => {
    return {
        type: DELETE_BUNDLE_SUCCESS,
        payload: value,
    };
};

export const deleteBundleErrorAction = (value) => {
    return {
        type: DELETE_BUNDLE_ERROR,
        payload: value,
    };
};