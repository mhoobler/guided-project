import { FC, createContext, useState, useReducer } from "react";
import CartReducer from "./CartReducer";

//Testing purposes
const dummyState: CartState = {
  "5fbfff7d58aa65167efb52b9": {
    avgRating: 0,
    description: "Your mom won't be able to wait to hear you practice!",
    imageUrl:
      "https://st-super-store.s3-us-west-2.amazonaws.com/images/bag_pipes.jpg",
    inCart: 1,
    isOnSale: false,
    name: "Bag Pipes",
    price: 120,
    stockCount: 2,
    _id: "5fbfff7d58aa65167efb52b9",
  },
  "5fbfff7d58aa65167efb52b8": {
    avgRating: 0,
    description: "Your mom won't be able to wait to hear you practice!",
    imageUrl:
      "https://st-super-store.s3-us-west-2.amazonaws.com/images/bag_pipes.jpg",
    inCart: 1,
    isOnSale: false,
    name: "Wilson Emerson Basketball",
    price: 120,
    stockCount: 2,
    _id: "5fbfff7d58aa65167efb52b9",
  },
};

const CartContext = createContext<{
  state: CartState;
  howManyItemsInCart: () => number;
  clearCart: () => void;
  setItemInCart: SetItemInCart;
}>({
  state: {},
  howManyItemsInCart: () => 0,
  clearCart: () => {},
  setItemInCart: () => {},
});

const { Provider } = CartContext;

const CartProvider: FC = ({ children }) => {
  //Should probably useRef here
  const [state, dispatch] = useReducer(CartReducer, {});

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const setItemInCart: SetItemInCart = (item, quantity) => {
    let newItem = { ...item, inCart: quantity };
    dispatch({ type: "CHANGE_ITEM", payload: newItem });
  };

  const howManyItemsInCart = () => {
    let total = 0;
    Object.values(state).forEach((e) => {
      total += e.inCart;
    });
    return total;
  };

  return (
    <Provider
      value={{
        state,
        howManyItemsInCart,
        clearCart,
        setItemInCart,
      }}
    >
      {children}
    </Provider>
  );
};

export { CartProvider, CartContext };
