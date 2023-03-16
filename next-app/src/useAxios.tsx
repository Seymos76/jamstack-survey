import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://localhost/api',
    headers: {
        post: {
            'Content-Type': 'application/json'
        }
    }
});