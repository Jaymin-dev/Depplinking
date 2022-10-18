import axios from 'axios';

const APP_PLATFORM = 'Mobile';

export const appConfig = {
  baseAPI: '',
  defaultTimeout: 5000,
};

export const request = axios.create({
  headers: {
    app_platform: APP_PLATFORM,
    app_version: 1,
  },
});

const getToken = async () => {
  // return TokenManager.retrieveToken();
};

export const removeToken = () => {
  delete request.defaults.headers.Authorization;
};

export const setupHttpConfig = async () => {
  // await TokenManager.deleteToken();
  // request.defaults.baseURL = appConfig.baseAPI;
  // request.defaults.timeout = appConfig.defaultTimeout;
  axios.defaults.headers['Content-Type'] = 'application/json';
  const token = await getToken();
  if (token) {
    request.defaults.headers.Authorization = `Bearer ${token}`;
  }
};
