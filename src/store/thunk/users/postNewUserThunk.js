import { fetchCreateNewUser } from "../../../api/fakeServer/Api";
import {createNewUserErrorAction, createNewUserSuccessAction} from "../../actions/userActionCreators";

const postNewUserThunk = (newUser, usersData) => {
    const headers = {
        'Content-Type': 'application/json',
    };
    return dispatch => {
        fetchCreateNewUser(newUser)
            .then(({data}) => {
                dispatch(createNewUserSuccessAction([...usersData, newUser]));
            })
            .catch(error => {
                dispatch(createNewUserErrorAction(error));
            })
    };
};

export default postNewUserThunk;