const addToDb = (id) => {
  // console.log(id);
  let shopingCart = {};

  const storedCart = localStorage.getItem("shoping-cart");
  if (storedCart) {
    shopingCart = JSON.parse(storedCart);
  }
  const quantity = shopingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shopingCart[id] = newQuantity;
  } else {
    shopingCart[id] = 1;
  }
  localStorage.setItem("shoping-cart", JSON.stringify(shopingCart));
};

const getStoredCart = () => {
  let shopingCart = {};
  const storedCart = localStorage.getItem("shoping-cart");
  if (storedCart) {
    shopingCart = JSON.parse(storedCart);
    //  console.log(storedCart);
  }
  return shopingCart;
};

const removeFromDb = id => {
  const storedCart = localStorage.getItem("shoping-cart");
  if (storedCart) {
    const shopingCart = JSON.parse(storedCart);

    if (id in shopingCart) {
      delete shopingCart[id];
      localStorage.setItem("shoping-cart", JSON.stringify(shopingCart));
    }
  }
}

// const deleteShoppingCart = ()=>{
//     localStorage.removeItem('shoping-cart')
// }
export { addToDb, getStoredCart, removeFromDb };
