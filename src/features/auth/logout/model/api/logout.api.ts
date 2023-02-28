import { axiosPublic } from '@/shared/api/axios';

export const logoutApi = async () => {
  return axiosPublic.get('/api/v1/auth/logout');
};
