import { FC, createContext, useState } from "react";

const CartContext = createContext<{
  state: CartState;
  dispatch: (item: ItemEntry, quantity: number) => void;
}>({
  state: {},
  dispatch: () => {},
});

const { Provider } = CartContext;

const CartProvider: FC = ({ children }) => {
  const [cart, setCart] = useState<CartState>({});

  const setItem = (item: ItemEntry, quantity: number) => {
    if (quantity === 0) {
      let newCart = { ...cart };
      delete newCart[item._id];
      setCart(newCart);
    } else {
      setCart({
        ...cart,
        [item._id]: item,
      });
    }
  };

  return (
    <Provider value={{ state: cart, dispatch: setItem }}>{children}</Provider>
  );
};

export { CartProvider, CartContext };
