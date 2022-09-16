import {createNewCategoriesAction} from "../../actions/categoriesActionCreators";


const postNewCategoryThunk = (newCategory, headers) => {
    return dispatch => {
        dispatch(createNewCategoriesAction([...categoriesData, newCategory]));
    };
};

export default postNewCategoryThunk;