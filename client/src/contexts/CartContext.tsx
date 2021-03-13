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

  const setItem = (item: ItemEntry | CartEntry, quantity: number) => {

    const cartEntry = {
      ...item,
      inCart: quantity,
    };

    if (quantity === 0 && cart[item._id]) {
      const change = -1 * cart[item._id].inCart;
      let newCart = { ...cart };

      delete newCart[item._id];
      setCart(newCart);
      setTotal(total + change);
    } else {
      if(cart[item._id]){
        const current = cart[item._id];
        const change = current.inCart === quantity ? 0 : quantity - current.inCart;
        
        setCart({
          ...cart,
          [item._id]: cartEntry
        });
        setTotal(total + change);
      } else {
        const change = quantity;

        setCart({
          ...cart,
          [item._id]: cartEntry,
        });
        setTotal(total + change);
      }
    }
  };

  return (
    <Provider value={{ state: cart, total, dispatch: setItem }}>
      {children}
    </Provider>
  );
};

export { CartProvider, CartContext };
