import {fetchPatchCardData} from '../../../api/fakeServer/Api';
import {correctCardErrorAction, correctCardSuccessAction} from '../../actions/bundleOfCardsCreators';

const patchCardsThunk = (newData, cardID) => {
    const headers = {
        'Content-Type': 'application/json',
    };

    return dispatch => {
        fetchPatchCardData(cardID, newData, headers)
            .then(({data}) => {
                dispatch(correctCardSuccessAction(data));
            })
            .catch(error => {
                dispatch(correctCardErrorAction(error));
            });
    };
};

export default patchCardsThunk;