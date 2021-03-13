import React, { useContext } from "react";

import { CartContext } from "../contexts/CartContext";

const Cart: React.FC = () => {
  const { state, dispatch } = useContext(CartContext);
  const keys = Object.keys(state);
  return (
    <div>
      {keys.map((e: string) => {
        return <div key={e}>{state[e]._id}</div>;
      })}
    </div>
  );
};

export default Cart;
