import axios from 'axios'

const BASE_URL = 'https://localhost:44399/api';

export default axios.create({
    baseURL : BASE_URL,
    headers : {
        'content-type': 'application/json'
    }
})