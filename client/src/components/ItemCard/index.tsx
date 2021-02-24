import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Ratings from "../Ratings";

import "./ItemCard.css";

type Props = {
  item: ItemEntry;
};

const ItemCard: React.FC<Props> = (P) => {
  // Add commas and trailing 0's if needed
  const formatPrice = () => {
    const splitArr = String(P.item.price).split(".");

    // check if whole number needs commas
    if (splitArr[0].length > 3) {
      // reverse the string, then split it into chuncks of 3
      // '12345' -> '54321' -> ['543', '21']
      let reverseArr = splitArr[0]
        .split("")
        .reverse()
        .join("")
        .match(/.{1,3}/g);

      // restore every substring, reverse the entire array, add commas
      // ['543', '21']  -> ['345', '12'] -> ['12', '345'] -> '12,345'
      splitArr[0] = reverseArr!
        .map((e: string) => {
          return e.split("").reverse().join("");
        })
        .reverse()
        .join(",");
    }

    // check if decimals needs trailing 0's
    if (splitArr[1] && splitArr[1].length === 1) {
      splitArr[1] += "0";
    }
    if (splitArr[1] === undefined) {
      splitArr.push("00");
    }

    return splitArr.join(".");
  };

  return (
    <div className="item-card-container">
      {/* Image */}
      <div className="item-image-wrapper">
        <img className="img-contain" src={P.item.imageUrl} alt={P.item.name} />
      </div>
      {/* Details */}
      <div className="item-details">
        {/* Name */}
        <div className="item-name">
          <Link to={`/item/${P.item._id}`}>{P.item.name}</Link>
        </div>

        {/* Rating */}
        <Ratings rating={P.item.avgRating} />

        {/* Price */}
        <div className="item-price">
          ${formatPrice()}{" "}
          {P.item.isOnSale ? <span className="on-sale">On Sale</span> : null}
        </div>
      </div>

      {/* View Item */}
      <div className="view-select">
        <div>
          <Link to={`/item/${P.item._id}`}>View Item</Link>
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
