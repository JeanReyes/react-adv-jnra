import { Formik, Form } from 'formik';
import { MyTextInput, MyCheckbox, MySelect } from '../components';
import * as Yup from 'yup';
import '../styles/styles.css';

export interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

const arrayOption = [
    { value: 'developer', label: 'Developer' },
    { value: 'designer', label: 'Designer' },
    { value: 'it-senior', label: 'It-Senior' },
    { value: 'it-junior', label: 'It-Junior' },
]

export const FormikAbstract = () => {

  return (
    <div>
        <h1>Formulario Components</h1>
        
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: ''
            }}
            onSubmit= {(values) => {
                console.log(values);         
            }}
            validationSchema = {
                Yup.object({
                    firstName: Yup.string().max(15,'debe tener 15 caractere al menos').required('Requerido'),
                    lastName: Yup.string().max(10, 'debe tener 10 caracteres al menos').required('Requerido'),
                    email: Yup.string().email().required('Requerido'),
                    terms: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
                    jobType: Yup.string().notOneOf(['it-junior'], 'Este opción no es aceptada').required('Requerido')
                })}
        >
            {
                ({ getFieldProps, touched, errors }) => (
                    <Form>
                        <MyTextInput label="First Name" name="firstName"/>
                        <MyTextInput label="Last Name" name="lastName"/>
                        <MyTextInput label="Email - Adrees" name="email" type="email"/>

                        <MySelect label="Select" name="jobType" as="select">
                            { arrayOption.map((opt)=> (<option value={opt.value}> { opt.label } </option>)) }
                        </MySelect>

                        <MyCheckbox label="Terms and conditions" name="terms"/>

                        <button type="submit">Submit</button>
                    </Form>
                )     
            }
        </Formik>
        
    </div>
  )
}
