import axios from 'axios';

const axiosPublic = axios.create({ baseURL: __API__, withCredentials: true });

const axiosPrivate = axios.create({
  withCredentials: true,
  baseURL: __API__,
});

axiosPrivate.interceptors.response.use(
  config => {
    return config;
  },
  async error => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config.isRetry
    ) {
      originalRequest.isRetry = true;
      try {
        await axiosPublic.get('/auth/refresh');
        return await axiosPrivate.request(originalRequest);
      } catch (e) {
        console.log(e);
      }
    }
    throw error;
  },
);

export { axiosPrivate, axiosPublic };
