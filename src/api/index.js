import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000'
});

apiClient.interceptors.response.use(response => response.data);

const getPhotos = (options = {}) => {
    return apiClient.get('/api/v1/photos', {
        params: {
            page: options.page || 1
        }
    }).then(response => response.data);
};

const getPhotographers = (options = {}) => {
    return apiClient.get('/api/v1/photographers', {
        params: {
            page: options.page || 1
        }
    }).then(response => response.data);
};

const getPhotographer = (options = {}) => {
    return apiClient.get(`/api/v1/photographers/${options.id}`).then(response => response.data);
};

const getPhoto = (options = {}) => {
    return apiClient.get(`/api/v1/photos/${options.id}`).then(response => response.data);
};

const login = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data.email == '123' && data.password == '789') {
                resolve({
                    name: 'Test',
                    photo: 'test.jpg'
                })
            } else {
                reject(['Invalid login or password']);
            }
        }, 1000);
    });
};

export default {
    getPhotos,
    getPhotographers,
    getPhotographer,
    getPhoto,
    login
};
