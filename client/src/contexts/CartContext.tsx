import { FC, createContext, useState } from "react";

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
};

const CartContext = createContext<{
  state: CartState;
  total: number;
  clearCart: () => void;
  dispatch: CartDispatch;
}>({
  state: {},
  total: 0,
  clearCart: () => {},
  dispatch: () => {},
});

const { Provider } = CartContext;

const CartProvider: FC = ({ children }) => {
  //Remove dummy state
  const [cart, setCart] = useState<CartState>(dummyState);
  const [total, setTotal] = useState(0);

  const clearCart = () => {
    setCart({});
  };

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
      if (cart[item._id]) {
        const current = cart[item._id];
        const change =
          current.inCart === quantity ? 0 : quantity - current.inCart;

        setCart({
          ...cart,
          [item._id]: cartEntry,
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
    <Provider value={{ state: cart, total, clearCart, dispatch: setItem }}>
      {children}
    </Provider>
  );
};

export { CartProvider, CartContext };
