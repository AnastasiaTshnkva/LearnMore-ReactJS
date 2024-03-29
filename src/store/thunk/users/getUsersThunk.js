import {fetchUsersDate} from '../../../api/fakeServer/Api';
import {
    getUserErrorAction,
    getUserSuccessAction,
    setUserRequestAction,
} from '../../actions/userActionCreators';


const getUsersThunk = () => {
    return dispatch => {
        dispatch(setUserRequestAction());

        fetchUsersDate()
            .then(({data}) => {
                dispatch(getUserSuccessAction(data))})
            .catch(error => {
                dispatch(getUserErrorAction(error))
            });
    };
};

export default getUsersThunk;
