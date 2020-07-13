import axios from 'axios';

import apiConfig from '../config/apiConfig';

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
