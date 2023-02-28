import { AxiosResponse } from 'axios';
import { User } from '@/entities/User';
import { LoginParamsByEmail } from '@/features/auth/sign-in/by-email/model/types/login.type';
import { axiosPublic } from '@/shared/api/axios';

export const loginApi = async (data: LoginParamsByEmail) => {
  return axiosPublic.post<LoginParamsByEmail, AxiosResponse<User>>(
    '/api/v1/auth/local/login',
    data,
  );
};
