import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Ratings from "../Ratings";

import "./ItemCard.css";

type Props = {
  item: ItemEntry;
};

const ItemCard: React.FC<Props> = ({ item }) => {
  const formatPrice = item.price.toLocaleString(undefined, {
    currency: "USD",
    currencyDisplay: "narrowSymbol",
    style: "currency",
  });

  return (
    <div className="item-card-container">
      {/* Image */}
      <div className="item-image-wrapper">
        <img className="img-contain" src={item.imageUrl} alt={item.name} />
      </div>
      {/* Details */}
      <div className="item-details">
        {/* Name */}
        <div className="item-name">
          <Link to={`/item/${item._id}`}>{item.name}</Link>
        </div>

        {/* Rating */}
        <Ratings rating={item.avgRating} />

        {/* Price */}
        <div className="item-price">
          {formatPrice + " "}
          {item.isOnSale ? <span className="on-sale">On Sale</span> : null}
        </div>
      </div>

      {/* View Item */}
      <div className="view-select">
        <div>
          <Link to={`/item/${item._id}`}>View Item</Link>
        </div>
      </div>
    </div>
  );
};

/*
Read from a couple sources that prop-types isn't really necessary with typescript.
The main difference seems to be: prop-types checks at runtime
and typescript checks at compile time.
*/
ItemCard.propTypes = {
  item: PropTypes.exact({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    avgRating: PropTypes.number.isRequired,
    isOnSale: PropTypes.bool.isRequired,
    stockCount: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default ItemCard;
