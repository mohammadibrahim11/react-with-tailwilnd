import React from "react";

const Product = ({ product,handleAddToCart }) => {
  const { picture, name, price, category } = product;
  return (
    <div className="w-80 m-auto">

   
    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
      <img
        src={picture}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
          <p className="dark:text-gray-100">{category}</p>
          <p className="dark:text-gray-100">${price}</p>
        </div>
        <button
         onClick={()=>handleAddToCart(product)}
          type="button"
          className="px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900"
        >
          add to cart
        </button>
      </div>
    </div>

    </div>
  );
};

export default Product;
