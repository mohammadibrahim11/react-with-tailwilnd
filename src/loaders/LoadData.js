import { getStoredCart } from "../utilities/utilities";

 const LoadData = async () => {
  const productsData = await fetch("products.json");
  const products = await productsData.json();
//   console.log(products);

  const savedCart = getStoredCart();
//   console.log('hello' , savedCart);
  const initialCart = [];

  for (const id in savedCart) {
    const foundProduct = products.find((product) => product.id === id);
    if (foundProduct) {
      const quantity = savedCart[id];
    //   console.log(savedCart);
      foundProduct.quantity = quantity;
      initialCart.push(foundProduct);
    }
  }

  return { products, initialCart };
};
export {LoadData,getStoredCart}
