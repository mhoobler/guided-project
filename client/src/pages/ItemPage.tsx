import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Ratings from "../components/Ratings";
import Price from "../components/Price";
import ErrorHandler from "../components/ErrorHandler";
import QuantitySelect from "../components/QuantitySelect";
import ButtonContainer from "../components/ButtonContainer";

import API from "../utils/API";

import "./styles/ItemPage.css";

type Params = {
  id: string;
};

const ItemPage: React.FC = () => {
  const [quantity, setQuantity] = useState(0);
  const [insufficient, setInsufficient] = useState(false);
  const [item, setItem] = useState<ItemEntry | null>(null);
  let params: Params = useParams();

  useEffect(() => {
    API.getItem(params.id)
      .then((res) => {
        let i: ItemEntry = res.data;
        setItem(i);
      })
      .catch((err) => console.log(err));
  }, []);

  if (item !== null) {
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

  return <div> Unable to load item </div>;
};

export default ItemPage;
