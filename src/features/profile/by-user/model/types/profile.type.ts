import { Gender } from '@/entities/User/model/types/user.types';

export interface Profile {
  firstName: string;
  lastName: string;
  birthday: Date;
  gender: Gender;
}

export interface ProfileUpdateParams {
  firstName: string;
  lastName: string;
  birthday: string;
  gender: Gender;
}
