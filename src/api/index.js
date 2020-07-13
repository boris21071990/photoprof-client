import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000'
});

apiClient.interceptors.response.use(response => {
    const { data } = response.data;

    return data;
}, error => Promise.reject(error.response.data.errors));

const getCities = () => {
    return apiClient.get('/api/v1/cities');
};

const getPhotos = (options = {}) => {
    return apiClient.get('/api/v1/photos', { params: { page: options.page || 1 } });
};

const getPhotographers = (options = {}) => {
    const params = { page: 1, ...options };

    return apiClient.get('/api/v1/photographers', { params });
};

const getPhotographer = (options = {}) => {
    return apiClient.get(`/api/v1/photographers/${options.id}`);
};

const getPhotographerProfile = () => {
    return apiClient.get('/api/v1/photographer/profile');
};

const updatePhotographerProfile = ({ first_name, last_name, city_id, description }) => {
    return apiClient.patch('/api/v1/photographer/profile', {
        photographer: {
            first_name: first_name,
            last_name: last_name,
            city_id: city_id,
            description: description
        }
    });
};

const updatePhotographerProfileImage = (formData) => {
    return apiClient.patch('/api/v1/photographer/profile/update_image', formData);
};

const createPhotographerPhoto = (formData) => {
    return apiClient.post('/api/v1/photographer/photos', formData);
};

const getPhotographerPhotos = () => {
    return apiClient.get('/api/v1/photographer/photos');
};

const getPhoto = (options = {}) => {
    return apiClient.get(`/api/v1/photos/${options.id}`);
};

const login = ({ email, password }) => {
    return apiClient.post('/api/v1/authentication/login', { email: email, password: password });
};

const register = ({ first_name, last_name, city_id, email, password }) => {
    return apiClient.post('/api/v1/authentication/register', {
        first_name: first_name,
        last_name: last_name,
        city_id: city_id,
        email: email,
        password: password
    });
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
    register
};
