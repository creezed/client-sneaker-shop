import * as yup from 'yup';
import { SetPassword } from '@/features/auth/forgot-password/model/types/SetPasswordParams';

export const SetPasswordSchema = yup.object<
  Record<keyof SetPassword, yup.AnySchema>
>({
  password: yup
    .string()
    .min(5, 'Password must be at least 5 characters')
    .max(12, 'Password must be at most 12 characters')
    .required('Password is a required field'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});
