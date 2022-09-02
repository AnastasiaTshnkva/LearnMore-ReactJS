import { fetchUsersDate } from 'api/fakeServer/Api';

const checkUsersLogin = (user, userData) => {
    console.log('userData is', userData,
        // 'user is', user
    );
    const currentUserData = userData.find(userData => {
        // console.log('user into filter', user, 'userData into filter' ,userData);
        userData.email == 'nastya@mail.ru'
    });
    console.log('currentUserData is', currentUserData);

     // await fetchUsersDate()
     //    .then(({data}) => {
     //        console.log(data);
     //        const currentUserData = data.filter(user => user.userEmail === userData.userEmail);
     //        if(userData.userName === currentUserData.userName && userData.userPassword === currentUserData.userPassword) {
     //            return true;
     //        } else {
     //            return false;
     //        };
     //    })
     //    .catch((error) => {
     //        console.error(error);
     //    });
};

export default checkUsersLogin;