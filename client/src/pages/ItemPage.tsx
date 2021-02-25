import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Ratings from "../components/Ratings";
import Price from "../components/Price";
import ErrorHandler from "../components/ErrorHandler";
import QuantitySelect from "../components/QuantitySelect";

import API from "../utils/API";

import "./styles/ItemPage.css";

type Params = {
  id: string;
};

const ItemPage: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(0);
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
    return (
      <div className="page-wrapper" id="ItemPage">
        <div className="item-wrapper">
          <div className="item-container">
            <img src={item.imageUrl} alt={item.name} />

            <div className="description-container">
              <div className="item-title">{item.name}</div>

              <div className="item-rating">
                {<Ratings rating={item.avgRating} />}
              </div>

              <div className="item-description">{item.description}</div>

              <Price price={item.price} />

              <QuantitySelect
                handleChange={(n: number) => setQuantity(n)}
                value={quantity}
              />

              <div className="item-add">Add to Cart</div>

              <ErrorHandler inCart={1} insufficient={true} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <div> Unable to load item </div>;
};

export default ItemPage;
