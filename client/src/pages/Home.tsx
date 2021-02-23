import React, { useState, useEffect } from "react";
import axios from "axios";

import Searchbar from "../components/Searchbar";
import ItemContainer from "../components/ItemContainer";

import API from "../utils/API";

import "./styles/Home.css";

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

const Home: React.FC = () => {
  const [itemsList, setItemsList] = useState<ItemEntry[]>([]);

  // Should wrap this in useCallback?
  const getItems = (str: string | undefined = "") => {
    API.getItems(str)
      .then((res) => {
        const { items } = res.data;
        setItemsList(items);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="page-wrapper" id="Home">
      <Searchbar
        handleSearch={(str: string) => {
          getItems(str);
        }}
      />

      <div className="content">
        <ItemContainer itemsList={itemsList} />
      </div>
    </div>
  );
};

export default Home;
