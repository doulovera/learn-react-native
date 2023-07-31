import * as yup from 'yup'

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .min(5, 'Password must be at least 5 characters')
    .required()
})
