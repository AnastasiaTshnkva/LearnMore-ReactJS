import { fetchPatchBundleData } from '../../../api/fakeServer/Api';
import {correctBundleErrorAction, correctBundleSuccessAction} from "../../actions/bundleOfCardsCreators";

const patchBundleThunk = (newData, bundleID) => {
    return dispatch => {
        const headers = {
            'Content-Type': 'application/json',
        }

        fetchPatchBundleData(bundleID, newData, headers)
            .then(({data}) => {
                dispatch(correctBundleSuccessAction(data));
            })
            .catch(error => {
                dispatch(correctBundleErrorAction(error));
            });
    };
};

export default patchBundleThunk;