import { fetchDeleteCategoryFromServer } from '../../../api/fakeServer/Api';
import {
    deleteCategoryErrorsAction,
    deleteCategorySuccessAction
} from '../../actions/categoriesActionCreators';

const deleteCategoryThunk = (categiryID) => {
    return dispatch => {
        fetchDeleteCategoryFromServer(categiryID)
            .then(({data}) => {
                dispatch(deleteCategorySuccessAction(data))
            })
            .catch(error => {
                dispatch(deleteCategoryErrorsAction(error));
            });
    };
};

export default deleteCategoryThunk;