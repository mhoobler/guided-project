import React, { useState } from "react";

import Searchbar from "../components/Searchbar";
import ItemContainer from "../components/ItemContainer";
import PageController from "../components/PageController";

import useGetList from "../utils/useGetList";

const querySize = 18;
const pageSize = 6;

const Home: React.FC = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState<ListQuery>({
    size: querySize,
    q: search,
    from: 0,
  });
  const itemsList = useGetList(query);

  //Here we slice up the ItemList and handle resetting the query when the pagination calls for it
  const p = (page * pageSize) % querySize;
  const itemsSliced = [...itemsList].slice(p, p + pageSize);
  const handlePage = (n: number) => {
    const newFrom = Math.floor(((page + n) * pageSize) / querySize) * querySize;

    if (newFrom !== query.from) {
      setQuery({
        size: querySize,
        q: search,
        from: newFrom,
      });
    }

    setPage(page + n);
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
        {itemsSliced.length > 0 ? (
          <ItemContainer itemsList={itemsSliced} />
        ) : search !== "" ? (
          <h2 className="center-text">No results</h2>
        ) : (
          <h2 className="center-text">Oops, looks like something went wrong</h2>
        )}
      </div>
      <PageController
        handlePage={handlePage}
        page={page}
        isLast={itemsList.length < querySize}
        isFirst={page < 1}
      />
    </div>
  );
};

export default Home;
