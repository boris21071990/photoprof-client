import axios from 'axios';

import apiConfig from '../config/api.config';

const apiClient = axios.create({
  baseURL: apiConfig.url,
});

apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error.response.data.errors);
  }
);

export default apiClient;
