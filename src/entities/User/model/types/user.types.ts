import { UserRole } from '@/entities/User/model/consts/UserConst';

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  gender?: Gender;
  birthday?: Date;
  roles: Role[];
}

export type Role = {
  id: number;
  value: UserRole;
};
export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export interface UserSchema {
  data?: User;
  isAuth: boolean;
}
