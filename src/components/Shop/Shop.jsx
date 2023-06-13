import React, { useContext } from "react";
import { addToDb } from "../../utilities/utilities";
import Product from "../Product/Product";
import { CartContext, ProductContext } from "../Root/Root";



const Shop = () => {

  const products = useContext(ProductContext);
  const [cart, setCart] = useContext(CartContext);
  // console.log(cart);
  console.log(products);

  const handleAddToCart=(selecetedProduct)=>{
   let newCart = [];
     const exists = cart.find((product)=>product.id === selecetedProduct.id)
     if(!exists){
        selecetedProduct.quantity= 1;
        newCart=[...cart,selecetedProduct
]     }
     else{
        const rest = cart.filter((product) => product !== selecetedProduct.id)
        exists.quantity =exists.quantity + 1;
        newCart = [...rest,selecetedProduct]
     }
     setCart(newCart);
    addToDb(selecetedProduct.id);
    
  }

  return (
 <div>
        <div className="grid grid-cols-3 justify-center gap-y-8 mb-8  ">
      {products.map((product) => (
        <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>
      ))}
    </div>
 </div>
  );
};

export default Shop;
