import React, { useState } from "react";

import Searchbar from "../components/Searchbar";
import ItemContainer from "../components/ItemContainer";
import PageController from "../components/PageController";

import useGetList from '../utils/useGetList';

const Home: React.FC = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const {data, isLoading} = useGetList(page, undefined, search);

  if(data && !isLoading) {
    const {items, hasMore, next, total} = data;

    const handlePage = (n: number) => {
      setPage(n);
      window.scrollTo(0, 0);
    };

    return (
      <div className="page-wrapper" id="Home">
        <Searchbar
          handleSearch={(str: string) => {
            setSearch(str);
          }}
        />

        {/* Oops message shows for a bit after clearing search, should find a way to do spinner while loading results */}
        <div className="content">
          {items.length > 0 ? (
            <ItemContainer itemsList={items} />
          ) : search !== "" ? (
            <h2 className="center-text">No results</h2>
          ) : (
            <h2 className="center-text">Oops, looks like something went wrong</h2>
          )}
        </div>
        <PageController
          handlePage={handlePage}
          page={page}
          isLast={!hasMore}
          isFirst={page < 1}
        />
      </div>
    );
  } else {
    return <div> Uh oh </div>
  }
};

export default Home;
