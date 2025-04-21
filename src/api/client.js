// src/api/client.js
import axios from 'axios';

const client = axios.create({
    // baseURL: 'http://{}:8080/api', // spring backend 주소
    // baseURL: 'http://localhost:8085/api', // nginx로 주소
    baseURL: 'http://localhost/api', // spring backend 주소
    // baseURL: 'http://180.210.81.31:8082/api', // spring backend 주소
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

client.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => Promise.reject(error));

export default client;