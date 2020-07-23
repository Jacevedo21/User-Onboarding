import * as yup from 'yup'

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be valid")
    .required("Email is required"),
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is Required"),
  password: yup
    .string()
    .min(3, "Password must be at least 3 characters long")
    .required("Please enter a password"),
  tos: yup
    .boolean()
    .required('ook ook tos')
    .oneOf([true], "Answer is required")
})

export default formSchema