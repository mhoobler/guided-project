import React from "react";

import "./ErrorHandler.css";

type Props = {
  inCart: number;
  insufficient: boolean;
};

const ErrorHandler: React.FC<Props> = ({ inCart, insufficient }) => {
  return (
    <div className="error-container">
      {inCart > 0 ? (
        <div className="error in-cart">
          {inCart} of this item is currently in your cart
        </div>
      ) : null}
      {insufficient ? (
        <div className="error insufficient">Insufficient stock</div>
      ) : null}
    </div>
  );
};

export default ErrorHandler;
