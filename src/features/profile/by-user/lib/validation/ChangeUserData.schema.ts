import * as yup from 'yup';
import { Profile } from '../../model/types/profile.type';

export const ChangeUserDataSchema = yup.object<
  Record<keyof Profile, yup.AnySchema>
>({
  firstName: yup.string().required('First name is a required field'),
  lastName: yup.string().required('Surname is a required field'),
  birthday: yup
    .date()
    .min(new Date('1940-01-01'), 'Wrong date of birth')
    .max(new Date(Date.now()), 'Wrong date of birth')
    .required('Date of birth is a required field')
    .nullable()
    .typeError('Invalid Date')
    .default(undefined),
  gender: yup.string().required('Gender is a required field'),
});
