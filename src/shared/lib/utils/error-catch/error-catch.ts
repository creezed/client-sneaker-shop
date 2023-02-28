import { AxiosError } from 'axios';

export const errorCatch = (error: AxiosError | Error): string => {
  if (error instanceof AxiosError) {
    if (typeof error.response?.data?.message === 'object') {
      return error.response.data.message[0];
    }
    if (error.response?.data?.message) {
      return error.response.data.message;
    }
    return error.message;
  }
  return 'Unknown error';
};
