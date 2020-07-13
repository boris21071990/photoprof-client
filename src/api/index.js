import apiClient from './apiClient';
import protectedApiClient from './protectedApiClient';

import authenticationService from '../services/authentication.service';

const getCities = () => {
    return apiClient.get('/api/v1/cities');
};

const getCategories = () => {
    return apiClient.get('/api/v1/categories');
};

const getPhotos = (options = {}) => {
    const params = { page: 1, ...options };

    return apiClient.get('/api/v1/photos', { params });
};

const getPhotographers = (options = {}) => {
    const params = { page: 1, ...options };

    return apiClient.get('/api/v1/photographers', { params });
};

const getPhotographer = (options = {}) => {
    return apiClient.get(`/api/v1/photographers/${options.slug}`);
};

const getPhotographerProfile = () => {
    return protectedApiClient.get('/api/v1/photographer/profile');
};

const updatePhotographerProfile = ({ first_name, last_name, city_id, description }) => {
    return protectedApiClient.patch('/api/v1/photographer/profile', {
        photographer: {
            first_name: first_name,
            last_name: last_name,
            city_id: city_id,
            description: description
        }
    });
};

const updatePhotographerProfileImage = (formData) => {
    return protectedApiClient.patch('/api/v1/photographer/profile/update_image', formData);
};

const createPhotographerPhoto = (formData) => {
    return protectedApiClient.post('/api/v1/photographer/photos', formData);
};

const getPhotographerPhotos = () => {
    return protectedApiClient.get('/api/v1/photographer/photos');
};

const getPhoto = (options = {}) => {
    return apiClient.get(`/api/v1/photos/${options.id}`);
};

const login = ({ email, password }) => {
    return apiClient.post('/api/v1/authentication/login', {
        login: {
            email: email,
            password: password
        }
    }, {
        withCredentials: true
    }).then((response) => {
        authenticationService.setToken(response.data.token);

        return response;
    });
};

const register = ({ first_name, last_name, city_id, email, password }) => {
    return apiClient.post('/api/v1/authentication/register', {
        registration: {
            first_name: first_name,
            last_name: last_name,
            city_id: city_id,
            email: email,
            password: password
        }
    }, {
        withCredentials: true
    }).then((response) => {
        authenticationService.setToken(response.data.token);

        return response;
    });
};

const getCurrentUser = () => {
    return protectedApiClient.get('/api/v1/user');
};

const logout = () => {
    return authenticationService.removeToken();
};

export default {
    getCities,
    getPhotos,
    getPhotographers,
    getPhotographer,
    getPhotographerProfile,
    updatePhotographerProfile,
    updatePhotographerProfileImage,
    createPhotographerPhoto,
    getPhotographerPhotos,
    getPhoto,
    login,
    register,
    getCurrentUser,
    logout,
    getCategories
};
