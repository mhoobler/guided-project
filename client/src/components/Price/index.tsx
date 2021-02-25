import React from 'react';

import './Price.css';

type PriceProps = {
  price: number
  isOnSale?: boolean
}

const Price: React.FC<Props> = ({price, isOnSale}) => {

  const formatPrice = price.toLocaleString(undefined, {
    currency: "USD",
    currencyDisplay: "narrowSymbol",
    style: "currency",
  });

  return (
    <div className="item-price">
      {formatPrice + " "}
      {isOnSale ? <span className="on-sale">On Sale</span> : null}
    </div>
  )
}

export default Price;
