
import * as Yup from 'yup';
import { useFormik, Formik, Form, ErrorMessage } from 'formik';
import { MyTextInput } from '../components';
import '../styles/styles.css';


export const RegisterFormikPage = () => {
    return (
        <div>
            <h1>Register Formik  Page</h1>
            <Formik
                  initialValues= {{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit = {(values) => {
                    console.log(values);         
                }}

                validationSchema= {Yup.object({
                    name: Yup.string().max(15,'debe tener 15 caractere al menos').min(2, 'debe tener un mínimo de 2 carecteres').required('Requerido'),
                    email: Yup.string().email('no corresponde a un email valido').required('Requerido'),
                    password1: Yup.string().min(6, 'debe tener 6 caracteres al menos').required('Requerido'),
                    password2: Yup.string().oneOf([Yup.ref('password1')], 'Las contraseñas no son iguales').required('Requerido'),
                })}
            >
                {
                    ({ handleReset}) => (
                        <Form>
                            <MyTextInput label="Name" name="name"/>
                            <MyTextInput label="Email - Adrees" name="email" type="email"/>
                            <MyTextInput label="Password1" name="password1" type="password"/>
                            <MyTextInput label="Password2" name="password2" type="password"/>
                            <button onClick={ handleReset }>Reset</button>
                            <button type="submit">Create</button>
                        </Form>

                    )
                }

            </Formik>
        </div>
    )
}
