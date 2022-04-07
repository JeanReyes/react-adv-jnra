import React from 'react';
import { useFormik, Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikComponents = () => {

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
                        <label htmlFor="firstName"> First Name </label>
                        <Field name="firstName" type="text" />
                        <ErrorMessage name="firstName" component="span"/>

                        <label htmlFor="lastName"> Last Name</label>
                        <Field name="lastName" type="text" />
                        <ErrorMessage name="lastName" component="span"/>

                        <label htmlFor="email"> Email - Adrees</label>
                        <Field name="email" type="email" />
                        <ErrorMessage name="email" component="span"/>

                        <label htmlFor="jobType">Select</label>
                        <Field name="jobType" as="select">
                            <option value="">Hola</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">It-Senior</option>
                            <option value="it-junior">It-Junior</option>
                        </Field>
                        <ErrorMessage name="jobType" component="span"/>

                        <label> <Field name="terms" type="checkbox" /> Terms and conditions</label>
                        <ErrorMessage name="terms" component="span"/>

                        <button type="submit">Submit</button>
                    </Form>
                )     
            }
        </Formik>
        
    </div>
  )
}
