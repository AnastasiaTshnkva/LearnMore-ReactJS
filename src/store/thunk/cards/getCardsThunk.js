import {fetchBundleOfCardsData} from "../../../api/fakeServer/Api";
import {
    getBundleOfCardFailureAction,
    getBundleOfCardSuccessAction,
    setBundleOfCardsRequestAction
} from "../../actions/bundleOfCardsCreators";

const getCardsThunk = (bundleID) => {
    return dispatch => {
        dispatch(setBundleOfCardsRequestAction());

        fetchBundleOfCardsData(bundleID)
            .then(({data}) => {
                dispatch(getBundleOfCardSuccessAction(data));
            })
            .catch((error) => {
                dispatch(getBundleOfCardFailureAction(error))
            })
    };
};

export default getCardsThunk;