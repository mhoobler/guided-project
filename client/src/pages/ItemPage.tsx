import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetItem from "../utils/useGetItems";
import Ratings from "../components/Ratings";

import API from "../utils/API";

import "./styles/ItemPage.css";

type Params = {
  id: string;
};

const ItemPage: React.FC = () => {
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

  return (
    <div className="page-wrapper" id="ItemPage">
      {/* <div className="item-wrapper"> */}
      <div className="item-container">
        <img src={item ? item.imageUrl : ""} alt={item ? item.name : ""} />

        <div className="description-container">
          <div className="item-title">{item ? item.name : null}</div>

          <div className="item-rating">
            {item ? <Ratings rating={item.avgRating} /> : null}
          </div>

          <div className="item-description">
            {item ? item.description : null}
          </div>

          <div className="item-price">{item ? item.price : null}</div>

          <div className="item-quanity">{item ? item.stockCount : null}</div>

          <div className="item-add">Add to Cart</div>

          <div className="alerts-container">
            <div className="alert insufficient">Insufficient stock</div>
            <div className="alert in-cart">item is currently in your cart</div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ItemPage;
