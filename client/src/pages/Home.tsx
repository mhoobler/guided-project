import React, { useState } from "react";

import Searchbar from "../components/Searchbar";
import ItemContainer from "../components/ItemContainer";

import useGetList from "../utils/useGetList";

import "./styles/Home.css";

const Home: React.FC = () => {
  const [search, setSearch] = useState("");
  const query: ListQuery = { size: 29, q: search };
  const itemsList = useGetList(query);

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
