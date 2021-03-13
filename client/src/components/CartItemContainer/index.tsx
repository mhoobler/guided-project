import React from "react";

type CartItemContainerProps = {
  dispatch: CartDispatch;
  cartEntry: CartEntry;
};

const CartItemContainer: React.FC<CartItemContainerProps> = ({
  dispatch,
  cartEntry,
}) => {
  const handleChange = (evt: any) => {
    const val = evt.currentTarget.value;
    dispatch(cartEntry, parseInt(val));
  };

  return (
    <div className="cart-item-container">
      <div>{cartEntry.name}</div>
      <input type="number" value={cartEntry.inCart} onChange={handleChange} />
    </div>
  );
};

export default CartItemContainer;
