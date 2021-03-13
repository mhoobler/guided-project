import React from "react";

import Price from "../Price";
import QuantitySelect from "../QuantitySelect";
import ButtonContainer from "../ButtonContainer";

import "./CartItemContainer.css";

type CartItemContainerProps = {
  dispatch: CartDispatch;
  cartEntry: CartEntry;
};

const CartItemContainer: React.FC<CartItemContainerProps> = ({
  dispatch,
  cartEntry,
}) => {
  const handleChange = (n: number) => {
    if (n === 0) {
      const message =
        "Are you sure you want to remove this item from your cart?";
      let bool = window.confirm(message);
      if (bool) {
        dispatch(cartEntry, 0);
      }
    } else if (!(n > cartEntry.stockCount)) {
      dispatch(cartEntry, n);
    }
  };
  console.log(cartEntry);

  return (
    <div className="cart-item-container row">
      {/* Cart Image */}
      <div className="cart-item-image image-container">
        <img src={cartEntry.imageUrl} alt={cartEntry.name} />
      </div>
      {/* Cart Item Controls */}
      <div className="cart-item-controls col">
        <div className="cart-item-name">
          <h4>{cartEntry.name}</h4>
        </div>
        <div className="inputs-container row">
          <div className="quantity-container row">
            <QuantitySelect
              value={cartEntry.inCart}
              handleChange={handleChange}
            />
          </div>
          <div className="remove-container">
            <ButtonContainer variant="danger">
              <button
                onClick={() => {
                  handleChange(0);
                }}
              >
                Remove
              </button>
            </ButtonContainer>
          </div>
        </div>
      </div>
      {/* Cart Price */}
      <Price price={cartEntry.price} />
    </div>
  );
};

export default CartItemContainer;
