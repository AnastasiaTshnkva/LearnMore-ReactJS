import axios from "axios";

const fakeServerInstance = axios.create({
    baseURL: 'http://localhost:3004/',
    timeout: "1000",
    headers: {'x-auth': 'ghjk'}
    })

export default fakeServerInstance;