import {fetchDeleteCardFromServer} from '../../../api/fakeServer/Api';
import {deleteCardErrorAction, deleteCardSuccessAction} from '../../actions/bundleOfCardsCreators';

const deleteCardThunk = (cardID, cardsData) => {
    return dispatch => {
        fetchDeleteCardFromServer(cardID)
            .then(({data}) => {
                console.log(data);
                dispatch(deleteCardSuccessAction())
            })
            .catch(error => {
                dispatch(deleteCardErrorAction(error));
            })
    }
};

export default deleteCardThunk;