import React, { useState, useEffect } from "react";

import Searchbar from "../components/Searchbar";
import ItemContainer from "../components/ItemContainer";

import useGetItems from "../utils/useGetItems";

import "./styles/Home.css";

const Home: React.FC = () => {
  const [search, setSearch] = useState("");
  const query: ListQuery = { size: 29, q: search };
  const itemsList = useGetItems(JSON.stringify(query));

  return (
    <div className="page-wrapper" id="Home">
      <Searchbar
        handleSearch={(str: string) => {
          setSearch(str);
        }}
      />

      <div className="content">
        <ItemContainer itemsList={itemsList} />
      </div>
    </div>
  );
};

export default Home;
