import React, { useState, useEffect } from "react";
import axios from "axios";

import ItemContainer from "../components/ItemContainer";
import API from "../utils/API";

type ItemEntry = {
  _id: string;
  name: string;
  description: string;
  price: number;
  avgRating: number;
  isOnSale: boolean;
  stockCount: number;
  imageUrl: string;
};

const Deals: React.FC = () => {
  const [itemsList, setItemsList] = useState<ItemEntry[]>([]);

  // Should wrap this in useCallback?
  const getSales = () => {
    API.getDeals()
      .then((res) => {
        const { items } = res.data;
        setItemsList(items);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getSales();
  }, [getSales]);

  return (
    <div className="page-wrapper" id="Deals">
      <div className="content">
        <ItemContainer itemsList={itemsList} />
      </div>
    </div>
  );
};

export default Deals;
