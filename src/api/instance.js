import axios from "axios";

const fakeServerInstance = axios.create({
    baseURL: 'http://localhost:3004/',
    timeout: "1000",
    headers: {'x-auth': 'ghjk'}
    })

fakeServerInstance.interceptors.response.use(
    (response) => {return response},
    (response) => {

        throw new Error(response.error.message)
    }
)

export default fakeServerInstance;