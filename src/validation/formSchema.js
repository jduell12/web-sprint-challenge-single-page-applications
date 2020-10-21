import * as Yup from 'yup'

const formSchema = Yup.object().shape({
    name: Yup
        .string()
        .min(2, 'Name must be at least 2 characters long')
        .required('Name is required'),
    size: Yup
        .string()
        .oneOf(['extra large', 'large', 'medium', 'small', 'extra small'], 'A size is required')
        .required(),
    instructions: Yup
        .string()
});

export default formSchema;