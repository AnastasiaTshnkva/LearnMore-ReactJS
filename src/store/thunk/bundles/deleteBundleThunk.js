import {fetchDeleteBundleFromServer} from "../../../api/fakeServer/Api";
import {deleteBundleErrorAction, deleteBundleSuccessAction} from "../../actions/bunldlesActionCreators";

const deleteBundleThunk = (bundleID) => {
    return dispatch => {
        fetchDeleteBundleFromServer(bundleID)
            .then(({data}) => {
                dispatch(deleteBundleSuccessAction(data));
            })
            .catch(error => {
                dispatch(deleteBundleErrorAction(error));
            });
    };
};

export default deleteBundleThunk;