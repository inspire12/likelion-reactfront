// src/api/client.js
import axios from 'axios';

const client = axios.create({
    // baseURL: 'http://{}:8080/api', // spring backend 주소
    baseURL: 'http://localhost/api', // nginx로 주소
    // baseURL: 'http://localhost/api', // spring backend 주소
    // baseURL: 'http://180.210.81.31:8082/api', // spring backend 주소
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default client;
