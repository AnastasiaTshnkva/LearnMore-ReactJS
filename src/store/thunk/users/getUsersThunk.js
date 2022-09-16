import {fetchUsersDate} from '../../../api/fakeServer/Api';
import {setNotValidUserAction, setValidUserAction} from '../../actions/userActionCreators';


const getUsersThunk = () => {
    return dispatch => {

        fetchUsersDate()
            .then(({data}) => {
                dispatch(setValidUserAction(data))})
            .catch(error => {
                dispatch(setNotValidUserAction(error))
            });
    };
};

export default getUsersThunk;
