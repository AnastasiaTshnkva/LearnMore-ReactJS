import {
    getUserErrorAction,
    getUserSuccessAction,
    setUserRequestAction
} from '../../actions/userActionCreators';
import {fetchGetCurrentUserByEmail} from '../../../api/fakeServer/Api';

const getCurrentUserByEmail = (userEmail) => {
    return dispatch => {
        dispatch(setUserRequestAction());

        fetchGetCurrentUserByEmail(userEmail)
            .then(({data}) => {
                dispatch(getUserSuccessAction(data))
            })
            .catch(error => {
                dispatch(getUserErrorAction(error))
            });
    };
};

export default getCurrentUserByEmail;