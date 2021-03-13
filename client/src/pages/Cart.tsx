import React, { useContext } from "react";

import CartItemContainer from '../components/CartItemContainer';

import { CartContext } from "../contexts/CartContext";

import "./styles/Cart.css";

const Cart: React.FC = () => {
  const { state, dispatch } = useContext(CartContext);
  const keys = Object.keys(state);
  return (
    <div className="page-wrapper" id="Cart">
      <div className='content'>
        <div className='page-title'>
          <h1>Shopping Cart</h1>
        </div>
        <div className='in-cart'>
          {keys.map((e: string) => {
            return <CartItemContainer key={e} dispatch={dispatch} cartEntry={state[e]}/>
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
