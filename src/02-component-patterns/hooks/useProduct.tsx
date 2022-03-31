import {useEffect, useRef, useState} from 'react'
import { onChangeArgs, Product } from '../interfaces/interfaces'

export const useProduct = ({product, onChange, values = 0}: {product: Product, onChange?: (args: onChangeArgs) => void, values?: number}) => {
    const [counter, setCounter] = useState(values);
    const isControlled = useRef( !!onChange ); 

    const increaseBy = (value: number) => {

        if ( isControlled.current ) {
            return onChange!({count: value, product}) // el signo ! indica que si el valor si existe
        }
        
        const newValue = Math.max(counter + value, 0 );

        setCounter(newValue)
        if ( onChange ) onChange({product, count: newValue});
    }

    useEffect(()=> {
        setCounter(values);
    },[values]);

    return {
        counter,
        increaseBy
    }
};
