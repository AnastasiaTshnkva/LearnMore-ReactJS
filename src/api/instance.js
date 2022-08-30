import axios from "axios";

const fakeServerInstance = axios.create({
    baseURL: 'http://localhost:3004/',
    timeout: "1000",
    headers: {'x-auth': 'ghjk'}
    })

// let refreshed = false;
//
// fakeServerInstance.interceptors.response.use(
//     (response) => {
//         if(refreshed === true) {
//             setIsUserLoggedIn(response.headers.acess, datresponse.headersa.refresh)
//         }
//
//     },
//     (response) => {
//         throw new Error(response.error.message)
//     }
// )
//
// fakeServerInstance.interceptors.request.use(
//     (request) => {
//         requiest.headers.token = data.acess;
//     },(request) => {
//         if(error.code === 403) logOutUser(); isUserLoggedIn = false, wipeUserData, reload page;
//         if(error.code === 403) {
//             request.headers.token = data.refresh;
//             refreshed = true;
//             return axios(request)
//         }
// }
// )

export default fakeServerInstance;