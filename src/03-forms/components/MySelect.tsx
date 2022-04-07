import React from 'react';
import { ErrorMessage, Field, useField } from 'formik';

export interface FormikProps {
    htmlFor?: string;
    label: string;
    name: string;
    type?: string;
    [ x: string ]: any;
}
 
export const MySelect = ({ label, ...props }: FormikProps) => {
    const [ field, meta ] = useField(props);

    return (
        <>
            <label htmlFor={ props.id || props.name }> { label } </label>
            <select {...field } { ...props }/>
            {
                meta.touched && meta.error && (
                    <span className="erros">{ meta.error }</span>
                )
            }
        </>
    )
}
