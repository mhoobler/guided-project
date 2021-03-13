import React, { useState } from "react";

import ItemContainer from "../components/ItemContainer";
import PageController from "../components/PageController";
import useGetList from "../utils/useGetList";

const pageSize = 6;

const Deals: React.FC = () => {
  const [page, setPage] = useState(0);
  const { data, isLoading } = useGetList(page, true);

  if (data && !isLoading) {
    const { items, hasMore } = data;

    const handlePage = (n: number) => {
      setPage(n);
      window.scrollTo(0, 0);
    };

    return (
      <div className="page-wrapper" id="Deals">
        <div className="content">
          {items.length > 0 ? (
            <ItemContainer itemsList={items} />
          ) : (
            <h2 className="center-text">No results</h2>
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
    return (
      <h2 className="center-text">Oops, looks like something went wrong</h2>
    );
  }
};

export default Deals;
