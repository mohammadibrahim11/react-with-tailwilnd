import React, { useState } from 'react';

const ShoppingCart = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 10, quantity: 0 },
    { id: 2, name: 'Product 2', price: 20, quantity: 0 },
    { id: 3, name: 'Product 3', price: 30, quantity: 0 },
  ]);

  const handleQuantityChange = (productId, quantity) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, quantity } : product
      )
    );
  };

  const calculateTotal = () => {
    return products.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h4>{product.name}</h4>
          <p>Price: ${product.price}</p>
          <input
            type="number"
            value={product.quantity}
            onChange={(e) =>
              handleQuantityChange(product.id, parseInt(e.target.value))
            }
          />
          <p>Subtotal: ${product.price * product.quantity}</p>
        </div>
      ))}
      <h3>Total: ${calculateTotal()}</h3>
    </div>
  );
};

export default ShoppingCart;
