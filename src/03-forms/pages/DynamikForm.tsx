import { Formik, Form } from 'formik';
import { MyTextInput, MySelect } from '../components';
import * as Yup from 'yup';
import formJson from '../data/custom-form.json';

const initialValues: {[x: string]: any} = {};
const requiredFields: {[x: string]: any} = {}

for ( const input of formJson ) {
  initialValues[input.name] = input.value;

  if ( !input.validations ) continue;

  let schema = Yup.string();

  for( const rule of input.validations ) {
    if ( rule.type === 'required' ) {
      schema = schema.required('Campo requerido');
    }
    if ( rule.type === 'minLength' ) {
      schema = schema.min((rule as any).value || 1, `Debe tener un minimo de ${(rule as any).value}`);
    }
    if ( rule.type === 'email' ) {
      schema = schema.email('No es un email');
    }
  }

  requiredFields[ input.name ] = schema;
}

const validationSchema = Yup.object({...requiredFields}) 

export const DynamikForm = () => {
  return (
    <div>
      <h1>Dinamik Formik</h1>
      <Formik
        initialValues={ initialValues }
        validationSchema={ validationSchema }
        onSubmit={(values)=>{
          console.log(values); 
        }}
      >
        {
          (formik) => (
            <Form noValidate>
              {
                formJson.map(({ name, label, type, placeholder, options}) => {

                  if ( type === 'input' || type === 'password' || type === 'email' ) { 
                    return <MyTextInput 
                              key={ name } 
                              name={ name } 
                              label={ label } 
                              type= { type }
                              placeholder= { placeholder }
                            /> 
                  } else if ( type === 'select' ){
                    return <MySelect 
                              key={ name } 
                              name={ name } 
                              label={ label } 
                              type= { type }
                              placeholder= { placeholder }
                            >
                              {
                                options?.map((opt)=>(
                                  <option key= { opt } value={ opt }>{ opt }</option>
                                ))
                              }
                            </MySelect>
                  }
                })
              }
              <button type="submit">Submit </button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}
