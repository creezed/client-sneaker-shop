import * as yup from 'yup';
import { LoginParamsByEmail } from '@/features/auth/sign-in/by-email/model/types/login.type';

export const loginByEmailSchema = yup.object<
  Record<keyof LoginParamsByEmail, yup.AnySchema>
>({
  email: yup
    .string()
    .email('Email must be a valid email')
    .required('Email is a required field'),
  password: yup
    .string()
    .min(5, 'Password must be at least 5 characters')
    .max(12, 'Password must be at most 12 characters')
    .required('Password is a required field'),
  remember: yup.boolean(),
});
