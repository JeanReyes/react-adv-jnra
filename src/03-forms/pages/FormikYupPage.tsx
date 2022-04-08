import { useFormik } from 'formik'
import * as Yup from 'yup';
import '../styles/styles.css';

export interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikYupPage = () => {

    const { handleChange, handleBlur, handleSubmit, getFieldProps, errors, touched, values } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (values) => {
            console.log(values);         
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(15,'debe tener 15 caractere al menos').required('Requerido'),
            lastName: Yup.string().max(10, 'debe tener 10 caracteres al menos').required('Requerido'),
            email: Yup.string().email().required('Requerido')
        })
    });

  return (
    <div>
        <h1>Formulario Yup</h1>
        <form noValidate onSubmit={ handleSubmit }>
            <label htmlFor="firstName"> First Name </label>
            <input type="text" { ...getFieldProps('firstName') } />
            { touched.firstName && errors.firstName && <span>{ errors.firstName }</span> }

            <label htmlFor="lastName"> Lst Name</label>
            <input type="text" { ...getFieldProps('lastName') }/>
            {  touched.lastName && errors.lastName && <span>{ errors.lastName }</span> }

            <label htmlFor="email"> Email - Adrees</label>
            <input type="email" { ...getFieldProps('email') } />
            { touched.email && errors.email && <span>{ errors.email }</span> }

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
