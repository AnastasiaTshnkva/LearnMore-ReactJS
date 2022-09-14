import {fetchUsersDate} from '../../../api/fakeServer/Api';

const getUsersThunk = () => {
    return dispatch => {

        fetchUsersDate().then(({data}) => {
            setUserData(data)
        });
    };
};

export default getUsersThunk;
