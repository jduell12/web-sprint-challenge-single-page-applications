import * as Yup from 'yup'

const formSchema = Yup.object().shape({
    name: Yup
        .string()
        .min(2, 'Name must be at least 2 characters long')
        .required('Name is required'),
    size: Yup
        .string()
        .required('A size is required'),
    toppings: Yup
        .string()
        .oneOf(['pepperoni, mushrooms, bacon, onion']),
    instructions: Yup
        .string()
});

export default formSchema;