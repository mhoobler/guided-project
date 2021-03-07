import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Ratings from "../components/Ratings";
import Price from "../components/Price";
import ErrorHandler from "../components/ErrorHandler";
import QuantitySelect from "../components/QuantitySelect";
import ButtonContainer from "../components/ButtonContainer";

import useGetItem from "../utils/useGetItem";

import "./styles/ItemPage.css";

type Params = {
  id: string;
};

const ItemPage: React.FC = () => {
  const params: Params = useParams();
  const item = useGetItem(params.id);

  const [quantity, setQuantity] = useState(0);
  const [insufficient, setInsufficient] = useState(false);

  if (typeof item === "string") {
    return (
      <div>
        <h2>{item}</h2>
      </div>
    );
  } else {
    const handleQuantityChange = (n: number) => {
      if (n > item.stockCount) {
        setInsufficient(true);
      } else {
        setInsufficient(false);
        setQuantity(n);
      }
    };

    return (
      <div className="page-wrapper" id="ItemPage">
        <div className="item-wrapper">
          <div className="item-container">
            <div className="image-container">
              <img src={item.imageUrl} alt={item.name} />
            </div>

            <div className="description-container">
              <div className="item-name">{item.name}</div>

              <div className="item-rating">
                {<Ratings rating={item.avgRating} />}
              </div>

              <div className="item-description">{item.description}</div>

              <Price price={item.price} />

              <QuantitySelect
                handleChange={handleQuantityChange}
                value={quantity}
              />

              <ButtonContainer align="left">
                <div className="item-add">Add to Cart</div>
              </ButtonContainer>

              <ErrorHandler inCart={1} insufficient={insufficient} />
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default ItemPage;
