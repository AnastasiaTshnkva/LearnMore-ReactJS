import {
    createNewCategoryErrorAction,
    createNewCategorySuccessfulAction
} from '../../actions/categoriesActionCreators';
import {fetchAddCategoryToServer, fetchUsersDate} from '../../../api/fakeServer/Api';


const postNewCategoryThunk = (categoriesData, newCategory, headers) => {
    return dispatch => {
        fetchAddCategoryToServer(newCategory, headers)
            .then(({data}) => {
                dispatch(createNewCategorySuccessfulAction([...categoriesData, newCategory]));
            })
            .catch(error => {
                dispatch(createNewCategoryErrorAction(error));
            });
    };


};

export default postNewCategoryThunk;