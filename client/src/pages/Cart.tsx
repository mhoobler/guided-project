import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import Price from "../components/Price";
import CartItemContainer from "../components/CartItemContainer";
import ButtonContainer from "../components/ButtonContainer";

import { CartContext } from "../contexts/CartContext";

import "./styles/Cart.css";

const Cart: React.FC = () => {
  const history = useHistory();
  const { state, setItemInCart, clearCart } = useContext(CartContext);
  const keys = Object.keys(state);
  //State should useRef and contain totalPrice as property?
  const totalPrice = (() => {
    var total = 0;
    keys.forEach((e: string) => {
      total += state[e].price * state[e].inCart;
    });
    return total;
  })();

  if (keys.length < 1) {
    return (
      <div className="page-wrapper" id="Cart">
        <div className="content">
          <h1 className="center-text">Your Cart is empty</h1>
        </div>
      </div>
    );
  }

  const handleCheckout = () => {
    clearCart();
    history.push("checkout");
  };

  return (
    <div className="page-wrapper" id="Cart">
      <div className="content">
        <div className="page-title">
          <h1>Shopping Cart</h1>
        </div>
        <div className="in-cart">
          {keys.map((e: string) => {
            return (
              <CartItemContainer
                key={e}
                dispatch={setItemInCart}
                cartEntry={state[e]}
              />
            );
          })}
        </div>
        <div className="checkout row">
          <ButtonContainer align="left">
            <button onClick={handleCheckout} className="checkout-button">
              {" "}
              Checkout{" "}
            </button>
          </ButtonContainer>
          <div className="total">
            <Price leadingText={"Total: "} price={totalPrice} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
