import React, { useState } from "react";

import Searchbar from "../components/Searchbar";
import ItemContainer from "../components/ItemContainer";

import useGetList from "../utils/useGetList";

const Home: React.FC = () => {
  const [search, setSearch] = useState("");
  const query: ListQuery = { size: 18, q: search };
  const itemsList = useGetList(query);

  return (
    <div className="page-wrapper" id="Home">
      <Searchbar
        handleSearch={(str: string) => {
          setSearch(str);
        }}
      />

      {/* Oops message shows for a bit after clearing search, should find a way to do spinner while loading results */}
      <div className="content">
        {itemsList.length > 0 ?
          <ItemContainer itemsList={itemsList} />
        :
        search !== "" ?
          <h2 className='center-text'>
            No results
          </h2>
        :
          <h2 className='center-text'>
            Oops, looks like something went wrong
          </h2>
        }
      </div>
    </div>
  );
};

export default Home;
