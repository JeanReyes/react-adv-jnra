import { useField } from 'formik';

export interface FormikProps {
    htmlFor?: string;
    label: string;
    name: string;
    placeholder?: string;
    type?: string;
    [ x: string ]: any;
}
 
export const MyTextInput = ({ label, ...props }: FormikProps) => {
    const [ field, meta ] = useField(props);

    return (
        <>
            <label htmlFor={ props.id || props.name }> { label } </label>
            <input className="text-input" {...field } { ...props }/>
            {
                meta.touched && meta.error && (
                    <span className="erros">{ meta.error }</span>
                )
            }
        </>
    )
}
