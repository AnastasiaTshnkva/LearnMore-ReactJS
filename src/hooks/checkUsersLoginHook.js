import {fetchCategoryData, fetchUsersDate} from 'api/fakeServer/Api'
import {getCategoriesFailureAction, getCategoriesSuccessAction} from "../store/actions/categoriesActionCreators";

const checkUsersLoginHook = async (userData) => {
     await fetchUsersDate()
        .then(({data}) => {
            console.log(data);
            const currentUserData = data.filter(user => user.userEmail === userData.userEmail);
            if(userData.userName === currentUserData.userName && userData.userPassword === currentUserData.userPassword) {
                return true;
            } else {
                return false;
            };
        })
        .catch((error) => {
            console.error(error);
        });
};

export default checkUsersLoginHook;