import { fetchCreateNewUser } from "../../../api/fakeServer/Api";
import {createNewUserErrorAction, createNewUserSuccessAction} from "../../actions/userActionCreators";

const postNewUserThunk = (newUser, usersData) => {
    const headers = {
        'Content-Type': 'application/json',
    };

    return dispatch => {
        fetchCreateNewUser(newUser, headers)
            .then(({data}) => {
                dispatch(createNewUserSuccessAction([...usersData, data]));
            })
            .catch(error => {
                dispatch(createNewUserErrorAction(error));
            })
    };
};

export default postNewUserThunk;