import { fetchCurrentUserData } from '../../../api/fakeServer/Api';
import {
    setUserRequestAction,
    getUserErrorAction,
    getUserSuccessAction,
} from '../../actions/userActionCreators';

const getCurrentUserThunk = (userID) => {
    return dispatch => {
        dispatch(setUserRequestAction());

        fetchCurrentUserData(userID)
            .then(({data}) => {
                dispatch(getUserSuccessAction(data));
            })
            .catch(error => {
                dispatch(getUserErrorAction(error));
            })
    };
};

export default getCurrentUserThunk;