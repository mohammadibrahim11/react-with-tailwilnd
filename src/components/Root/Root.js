import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
// import { getStoredCart } from '../../utilities/utilities';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export const ProductContext = createContext([]);
export const CartContext = createContext([]);

const Root = () => {
    const {products,initialCart} = useLoaderData();
    const [cart,setCart] = useState([initialCart]);
    // console.log(products);
    // console.log(initialCart);
    return (
        <ProductContext.Provider value={products}>
            <CartContext.Provider value={[cart,setCart]}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            </CartContext.Provider>
        </ProductContext.Provider>
         
    );
};

export default Root;