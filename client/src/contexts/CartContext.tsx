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
  dispatch: CartDispatch;
}>({
  state: {},
  howManyItemsInCart: () => 0,
  clearCart: () => {},
  dispatch: () => {},
});

const { Provider } = CartContext;

const CartProvider: FC = ({ children }) => {
  //Should probably useRef here
  const [cart, setCart] = useState<CartState>(dummyState);

  const clearCart = () => {
    setCart({});
  };

  const setItem = (item: ItemEntry | CartEntry, quantity: number) => {
    const cartEntry = {
      ...item,
      inCart: quantity,
    };

    if (quantity === 0 && cart[item._id]) {
      let newCart = { ...cart };

      delete newCart[item._id];
      setCart(newCart);
    } else {
      if (cart[item._id]) {
        setCart({
          ...cart,
          [item._id]: cartEntry,
        });
      } else {
        setCart({
          ...cart,
          [item._id]: cartEntry,
        });
      }
    }
  };

  const howManyItemsInCart = () => {
    let total = 0;
    Object.values(cart).forEach((e) => {
      total += e.inCart;
    });
    return total;
  };

  return (
    <Provider
      value={{ state: cart, howManyItemsInCart, clearCart, dispatch: setItem }}
    >
      {children}
    </Provider>
  );
};

export { CartProvider, CartContext };
