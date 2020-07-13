import axios from 'axios';

import apiConfig from '../config/api.config';

import authenticationService from '../services/authentication.service';

const protectedApiClient = axios.create({
    baseURL: apiConfig.url
});

protectedApiClient.interceptors.request.use((request) => {
    return authenticationService.getToken().then((token) => {
        request.headers['Authorization'] = `Bearer ${token}`;

        return request;
    });
});

protectedApiClient.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    return Promise.reject(error.response.data.errors);
});

export default protectedApiClient;
