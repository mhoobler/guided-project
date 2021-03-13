import React, { useContext } from "react";

import CartItemContainer from '../components/CartItemContainer';

import { CartContext } from "../contexts/CartContext";

const Cart: React.FC = () => {
  const { state, dispatch } = useContext(CartContext);
  const keys = Object.keys(state);
  return (
    <div>
      {keys.map((e: string) => {
        return <CartItemContainer dispatch={dispatch} cartEntry={state[e]}/>
      })}
    </div>
  );
};

export default Cart;
