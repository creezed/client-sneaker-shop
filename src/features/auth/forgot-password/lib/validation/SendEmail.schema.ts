import * as yup from 'yup';
import { SendEmailParams } from '@/features/auth/forgot-password/model/types/SendEmailParams.type';

export const SendEmailSchema = yup.object<
  Record<keyof SendEmailParams, yup.AnySchema>
>({
  email: yup
    .string()
    .email('Email must be a valid email')
    .required('Email is a required field'),
});
