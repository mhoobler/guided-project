import React, { FC, createContext, useState } from "react";

const CartContext = createContext<{
  state: CartEntry[];
  dispatch: React.Dispatch<React.SetStateAction<CartEntry[]>>;
}>({
  state: [],
  dispatch: () => {},
});

const { Provider } = CartContext;

const CartProvider: FC = ({ children }) => {
  const [test, setTest] = useState<CartEntry[]>([]);

  return (
    <Provider value={{ state: test, dispatch: setTest }}>{children}</Provider>
  );
};

export { CartProvider, CartContext };
