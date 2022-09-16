import {fetchBundleOfCardsData, fetchCurrentBundleData} from "../../../api/fakeServer/Api";
import {
    getBundleOfCardFailureAction,
    getBundleOfCardSuccessAction, getCurrentBundleFailureAction, getCurrentBundleSuccessAction,
    setBundleOfCardsRequestAction, setCurrentBundleRequestAction
} from "../../actions/bundleOfCardsCreators";
import {
    getBundlesFailureAction,
    getBundlesSuccessAction,
    setBundlesRequestAction
} from '../../actions/bunldlesActionCreators';

const getCurrentBundleThunk = (bundleID) => {
    return dispatch => {
        dispatch(setCurrentBundleRequestAction());

        fetchCurrentBundleData(bundleID)
            .then(({data}) => {
                dispatch(getCurrentBundleSuccessAction(data));
            })
            .catch((error) => {
                dispatch(getCurrentBundleFailureAction(error))
            })
    };
};

export default getCurrentBundleThunk;