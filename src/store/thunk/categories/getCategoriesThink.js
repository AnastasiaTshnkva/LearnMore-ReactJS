import {
    getCategoriesFailureAction,
    getCategoriesSuccessAction,
    setCategoriesRequestAction
} from '../../actions/categoriesActionCreators';
import {fetchCategoryData} from '../../../api/fakeServer/Api';

const getCategoriesThink = (userID) => {
    return dispatch => {
        dispatch(setCategoriesRequestAction());

        fetchCategoryData(userID)
            .then(({data}) => {
                dispatch(getCategoriesSuccessAction(data));
            }).catch((error) => {
            dispatch(getCategoriesFailureAction(error));
        });
    };
};

export default getCategoriesThink;