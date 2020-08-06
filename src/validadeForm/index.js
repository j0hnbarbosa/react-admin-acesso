import * as Yup from 'yup';

export const validateLogin = Yup.object({
  email: Yup.string()
    .min(5, 'Must be 5 characters or more')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Must be 5 characters or more')
    .required('Required'),
});
