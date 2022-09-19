import {fetchCurrentUserData} from "../../../api/fakeServer/Api";
import {setNotValidUserAction, setValidUserAction} from "../../actions/userActionCreators";

const getCurrentUserThunk = (userID) => {
    return dispatch => {
        fetchCurrentUserData(userID)
            .then(({data}) => {
                dispatch(setValidUserAction(data));
            })
            .catch(error => {
                dispatch(setNotValidUserAction(error));
            })
    };
};

export default getCurrentUserThunk;