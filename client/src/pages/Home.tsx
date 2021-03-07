import React, { useState } from "react";

import Searchbar from "../components/Searchbar";
import ItemContainer from "../components/ItemContainer";
import PageController from "../components/PageController";

import useGetList from "../utils/useGetList";

const querySize = 7;
const pageSize = 6;

const Home: React.FC = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState<ListQuery>({
    size: querySize,
    q: search,
    from: (() => page * pageSize)(),
  });
  const itemsList = useGetList(query);
  const itemsSlice = itemsList.slice(0, pageSize);

  const handlePage = (n: number) => {
    setQuery({
      ...query,
      from: (page + n) * pageSize,
    });
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
        {itemsSlice.length > 0 ? (
          <ItemContainer itemsList={itemsSlice} />
        ) : search !== "" ? (
          <h2 className="center-text">No results</h2>
        ) : (
          <h2 className="center-text">Oops, looks like something went wrong</h2>
        )}
      </div>
      <PageController
        handlePage={handlePage}
        page={page}
        isLast={itemsList.length <= pageSize}
        isFirst={page < 1}
      />
    </div>
  );
};

export default Home;
