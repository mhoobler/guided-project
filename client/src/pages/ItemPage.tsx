import React, { useContext, useState } from "react";

import { useParams } from "react-router-dom";

import Ratings from "../components/Ratings";
import Price from "../components/Price";
import ErrorHandler from "../components/ErrorHandler";
import QuantitySelect from "../components/QuantitySelect";
import ButtonContainer from "../components/ButtonContainer";

import { CartContext } from "../contexts/CartContext";

import useGetItem from "../utils/useGetItem";

import "./styles/ItemPage.css";

type Params = {
  id: string;
};

const ItemPage: React.FC = () => {
  const params: Params = useParams();
  const { item, isLoading } = useGetItem(params.id);

  const [quantity, setQuantity] = useState(0);
  const [insufficient, setInsufficient] = useState(false);
  const { state, setItemInCart } = useContext(CartContext);
  const inCart = state[params.id] ? state[params.id].inCart : 0;
  console.log(item);

  if (!isLoading && item !== undefined) {
    const handleQuantityChange = (n: number) => {
      if (n > item.stockCount) {
        setInsufficient(true);
      } else {
        setInsufficient(false);
        setQuantity(n);
      }
    };

    const handleAddToCart = () => {
      if (quantity > item.stockCount) {
        setInsufficient(true);
      } else {
        setItemInCart(item, quantity);
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
                <button onClick={handleAddToCart} className="item-add">
                  {inCart === 0 ? "Add to Cart" : "Update Cart"}
                </button>
              </ButtonContainer>

              <ErrorHandler inCart={inCart} insufficient={insufficient} />
            </div>
          </div>
        </div>
      </div>
    );
  } else if (!item && isLoading === false) {
    return <h2 className="center-text"> Sorry, we couldn't find that item </h2>;
  } else {
    return <h2 className="center-text"> Loading </h2>;
  }
};
export default ItemPage;
