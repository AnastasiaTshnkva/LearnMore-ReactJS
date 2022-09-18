import { fetchAddNewBundleToServer } from '../../../api/fakeServer/Api';
import { createNewBundleErrorAction,
    createNewBundleSuccessAction
} from '../../actions/bunldlesActionCreators';

const postNewBundleThunk = (bundlesData ,newBundle) => {
    const headers = {
        'Content-Type': 'application/json',
    };

    return dispatch => {
        fetchAddNewBundleToServer(newBundle, headers)
            .then(({data}) => {
                dispatch(createNewBundleSuccessAction([...bundlesData, data]));
            })
            .catch(error => {
                dispatch(createNewBundleErrorAction(error));
            });
    };
};

export default postNewBundleThunk;