import { useState } from "react"
import { ProductInCar } from "../pages/ShoppingPage";
import { Product } from "../interfaces/interfaces";

export const useShoppingCart = () => {
    const [ shoppingCart, setShoppingCart ] = useState<{[key: string]: ProductInCar}>({});

    const onProductCountChange = ({count, product}: {count: number, product: Product}) => {
        
        setShoppingCart(oldValue => {
            /**
             * TRUCO: desestructuro el oldvalue y extraigo el valor que queda en 0, y el resto es lo que se mantiene,
             * codigo anterior
             */
            // if (count === 0) {
            //     const { [product.id]: toDolete, ...resto } = oldValue;
            //     return {
            //         ...resto
            //     }
            // };
            // return {
            //     ...oldValue,
            //     [product.id]: {...product, count}
            // }

            const productInCart: ProductInCar = oldValue[product.id] || { ...product, count: 0 };
            if ( Math.max( productInCart.count + count, 0 ) > 0 ) {
                productInCart.count += count;
                return { 
                    ...oldValue,
                    [product.id]: productInCart
                }
            }

            // borrar el producto
            const { [product.id]: toDolete, ...resto } = oldValue;
            return resto; 

        });
    };

    return {
        shoppingCart,
        onProductCountChange
    }
}