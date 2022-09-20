import {fetchCurrentCardsData, fetchCurrentUserData, fetchDeleteCardFromServer} from '../../../api/fakeServer/Api';
import {deleteCardErrorAction, deleteCardSuccessAction} from '../../actions/bundleOfCardsCreators';

const deleteCardThunk = (cardID) => {
    return dispatch => {
        fetchDeleteCardFromServer(cardID)
            .then(({data}) => {
                dispatch(deleteCardSuccessAction(data))
            })
            .catch(error => {
                dispatch(deleteCardErrorAction(error));
            })
    }
};

export default deleteCardThunk;