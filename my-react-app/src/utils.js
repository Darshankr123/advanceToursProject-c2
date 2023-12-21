import axios from "axios";

export const coustomFetch = axios.create({
    baseURL: "http://localhost:8080",
})

