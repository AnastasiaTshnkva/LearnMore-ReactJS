import {fetchAddNewCardToServer} from "../../../api/fakeServer/Api";
import {createNewCardErrorAction, createNewCardSuccessAction} from "../../actions/bundleOfCardsCreators";

const postNewCardThunk = (cardsData, newCard) => {
    const headers = {
        'Content-Type': 'application/json',
    };

    return dispatch => {
        fetchAddNewCardToServer(newCard, headers)
            .then(({data}) => {
                dispatch(createNewCardSuccessAction([...cardsData, data]));
            })
            .catch(error => {
                dispatch(createNewCardErrorAction(error));
            });
    };
};

export default postNewCardThunk;