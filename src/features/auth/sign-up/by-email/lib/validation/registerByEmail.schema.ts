import * as yup from 'yup';
import { RegistrationFormFields } from '@/features/auth/sign-up/by-email/model/types/registration.type';

export const registerByEmailSchema = yup.object<
  Record<keyof RegistrationFormFields, yup.AnySchema>
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
  firstName: yup
    .string()
    .trim()
    .min(4, 'First name must be at least 4 characters')
    .max(8, 'First name must be at most 8 characters')
    .required('First name is a required field'),
  lastName: yup
    .string()
    .trim()
    .min(4, 'First name must be at least 4 characters')
    .max(8, 'First name must be at most 8 characters')
    .required('First name is a required field'),
  acceptTerms: yup.boolean().oneOf([true]),
});
