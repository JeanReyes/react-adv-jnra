import { useState , ReactElement} from 'react';
import { ProductCard } from './ProductCard';
import { ProductImage, ProductTitle, ProductButtons } from '../components/index';
import { Product } from '../interfaces/interfaces';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css';

export interface ProductInCar extends Product{
    count: number;
};

export interface CarritoProps {
    children?: ReactElement | ReactElement []
    products:  {[key: string]: ProductInCar}
}

export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange } = useShoppingCart()
 
    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr/>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {
                    products.map(product => (
                        <ProductCard 
                            key={product.id}
                            product={product}
                            className="bg-dark text-white"
                            values={ shoppingCart[product.id]?.count || 0 } // aqui ocurre la magia
                            onChange={ (evento)=> onProductCountChange(evento) }
                        >
                            <ProductImage className="custom-image"/>
                            <ProductTitle className="text-white"/>
                            <ProductButtons className="custom-buttons"/>
                        </ProductCard>
                    ))
                }
            <div className="shopping-cart">
                {
                    Object.entries(shoppingCart).map(([key, productInCart])=>(
                        <ProductCard 
                            key={key}
                            product={productInCart}
                            className="bg-dark text-white"
                            styles={{width: '100px'}}
                            values={ productInCart.count }  
                            onChange={ (evento)=> onProductCountChange(evento) }     
                        >
                            <ProductCard.Image className="custom-image"/>
                            <ProductCard.Title title={'hola mundo'} className="text-white"/>
                            <ProductCard.Buttons className="custom-buttons"/>
                        </ProductCard>
                    ))
                }
            </div>
                {/* <ProductCard 
                    product={product}
                    className="bg-dark text-white"
                >
                    <ProductCard.Image className="custom-image"/>
                    <ProductCard.Title title={'hola mundo'} className="text-white"/>
                    <ProductCard.Buttons className="custom-buttons"/>
                </ProductCard> */}


                {/* <ProductCard 
                    product={product}
                    className="bg-dark text-white"
                    styles={{background: 'red'}}
                >
                    <ProductImage className="custom-image"/>
                    <ProductTitle className="text-white"/>
                    <ProductButtons className="custom-buttons"/>
                </ProductCard> */}
            </div>
        </div>
    )
};
