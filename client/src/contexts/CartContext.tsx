import React, { FC, createContext, useState } from "react";

type CartItem = {
  [id: string]: CartEntry;
};

const CartContext = createContext<{
  state: CartItem[];
  dispatch: React.Dispatch<React.SetStateAction<CartItem[]>>;
}>({
  state: [],
  dispatch: () => {},
});

const { Provider } = CartContext;

const CartProvider: FC = ({ children }) => {
  const [test, setTest] = useState<CartItem[]>([]);

  return (
    <Provider value={{ state: test, dispatch: setTest }}>{children}</Provider>
  );
};

export { CartProvider, CartContext };
