import { fetchPatchCategoryData } from '../../../api/fakeServer/Api';
import {
    correctCategoryErrorAction,
    correctCategorySuccessAction
} from '../../actions/categoriesActionCreators';

const patchCategoryDataThunk = (newData, categoryID) => {
    return dispatch => {
        const headers = {
            'Content-Type': 'application/json',
        };

        fetchPatchCategoryData(categoryID, newData, headers)
            .then(({data}) => {
                dispatch(correctCategorySuccessAction(data))
            })
            .catch(error => {
                dispatch(correctCategoryErrorAction(error))
            });
    };
};

export default patchCategoryDataThunk;