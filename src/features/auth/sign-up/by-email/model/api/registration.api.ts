import { AxiosResponse } from 'axios';
import { User } from '@/entities/User';
import { RegisterParamsByEmail } from '@/features/auth/sign-up/by-email/model/types/registration.type';
import { axiosPublic } from '@/shared/api/axios';

export const registrationApi = async (data: RegisterParamsByEmail) => {
  return axiosPublic.post<RegisterParamsByEmail, AxiosResponse<User>>(
    '/api/v1/auth/local/registration',
    data,
  );
};
