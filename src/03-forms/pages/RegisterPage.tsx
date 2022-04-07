
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';


export const RegisterPage = () => {

    const { formData,
        email,
        name,
        password1,
        password2,
        onChange,
        resetForm,
        isValidEmail
    } = useForm({
        name: '',
        email: '', 
        password1: '',
        password2: ''
    });

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        
    }

    return (
        <div>
            <h1>Register Page</h1>
            <form noValidate onSubmit= { onSubmit }>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={ name }
                    onChange={ onChange }
                    className= { `${name.trim().length <= 0 && "has-error" }` }
                />
                { name.trim().length <= 0 && <span>este campo es necesario</span> } 
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={ email }
                    onChange={ onChange }
                    className= { `${ !isValidEmail(email) && 'has-error'}` }
                />
                { !isValidEmail(email) && <span>Email no es válido</span> }
                <input
                    type="password"
                    name="password1"
                    placeholder="Password1"
                    value={ password1 }
                    onChange={ (e)=>onChange(e) }
                />
                { password1.trim().length <= 0 && <span>este campo es necesario</span> } 
                { password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña tiemne que tener 6 caracteres</span> } 
                <input
                    type="password"
                    name="password2"
                    placeholder="Password2"
                    value={ password2 }
                    onChange={ onChange }
                />
                { password2.trim().length <= 0 && <span>este campo es necesario</span> } 
                { password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas deben ser iguales</span> } 

                <button type="submit">Create</button>
                <button onClick={ resetForm }>Reset</button>
            </form>
        </div>
    )
}
