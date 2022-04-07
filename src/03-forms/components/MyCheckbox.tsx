import React from 'react';
import { ErrorMessage, Field, useField } from 'formik';

export interface FormikProps {
    htmlFor?: string;
    label: string;
    name: string;
    type?: string;
    [ x: string ]: any;
}
 
export const MyCheckbox = ({ label, ...props }: FormikProps) => {
    const [ field, meta ] = useField({...props, type: 'checkbox'});

    return (
        <>
            <label> 
                { label }
                <input type="checkbox" {...field } { ...props }/>
             </label> 
            {
                meta.touched && meta.error && (
                    <span className="erros">{ meta.error }</span>
                )
            }
        </>
    )
}
