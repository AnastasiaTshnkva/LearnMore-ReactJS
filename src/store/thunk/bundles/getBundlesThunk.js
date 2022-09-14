import {
    getBundlesFailureAction,
    getBundlesSuccessAction,
    setBundlesRequestAction
} from '../../actions/bunldlesActionCreators';
import {fetchBundlesData} from '../../../api/fakeServer/Api';

const getBundlesThunk = (categoryID) => {
    return dispatch => {
        dispatch(setBundlesRequestAction());

        fetchBundlesData(categoryID)
            .then(({data}) => {
                dispatch(getBundlesSuccessAction(data));
            }).catch((error) => {
            dispatch(getBundlesFailureAction(error));
        });
    };
};

export default getBundlesThunk;