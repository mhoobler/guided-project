import React, { useContext } from "react";

import { CartContext } from "../contexts/CartContext";

const Cart: React.FC = () => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div>
      {state.map((e: CartEntry) => {
        return <div>{e._id}</div>;
      })}
    </div>
  );
};

export default Cart;
