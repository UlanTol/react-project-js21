import React, { createContext } from "react";

export const cartContext = createContext();

const INIT_STATE = {
  basket: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_CART":
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
}

const CartContextProvider = ({ children }) => {
  function addToBasket(product) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
        subPrice: product.price,
      };
      // console.log(newProduct);
    }
    let newProduct = {
      item: product,
      count: 1,
    };
    cart.products.push(newProduct);
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
  }
  return (
    <cartContext.Provider value={{ addToBasket }}>
      {children}
    </cartContext.Provider>
  );
};
export default CartContextProvider;
