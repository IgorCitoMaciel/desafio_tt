import axios from "axios";

const apiDB = axios.create({
    baseURL: "http://localhost:3333/"
})

export default apiDB;