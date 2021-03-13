import { FC, createContext, useState } from "react";

const CartContext = createContext<{
  state: CartState;
  total: number;
  dispatch: CartDispatch;
}>({
  state: {},
  total: 0,
  dispatch: () => {},
});

const { Provider } = CartContext;

const CartProvider: FC = ({ children }) => {
  const [cart, setCart] = useState<CartState>({});
  const [total, setTotal] = useState(0);

  const getTotal = (n: number) => {
    const keys = Object.keys(cart);
    var total = n;

    keys.forEach((e: string) => {
      total += cart[e].inCart;
    });

    return total;
  };

  const setItem = (item: ItemEntry | CartEntry, quantity: number) => {
    const cartEntry = {
      ...item,
      inCart: quantity,
    };

    if (quantity === 0) {
      let newCart = { ...cart };
      delete newCart[item._id];
      setCart(newCart);
      setTotal(getTotal(quantity));
    } else {
      setCart({
        ...cart,
        [item._id]: cartEntry,
      });
      setTotal(getTotal(quantity));
    }
  };

  return (
    <Provider value={{ state: cart, total, dispatch: setItem }}>
      {children}
    </Provider>
  );
};

export { CartProvider, CartContext };
