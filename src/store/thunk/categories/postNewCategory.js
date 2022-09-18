import {
    createNewCategoryErrorAction,
    createNewCategorySuccessfulAction
} from '../../actions/categoriesActionCreators';
import {fetchAddCategoryToServer, fetchAddNewCategoryToServer, fetchUsersDate} from '../../../api/fakeServer/Api';


const postNewCategoryThunk = (categoriesData, newCategory) => {
    const headers = {
        'Content-Type': 'application/json',
    };

    return dispatch => {
        fetchAddNewCategoryToServer(newCategory, headers)
            .then(({data}) => {
                dispatch(createNewCategorySuccessfulAction([...categoriesData, data]));
            })
            .catch(error => {
                dispatch(createNewCategoryErrorAction(error));
            });
    };


};

export default postNewCategoryThunk;