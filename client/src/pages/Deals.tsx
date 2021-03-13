import React, { useState } from "react";

import ItemContainer from "../components/ItemContainer";
import PageController from "../components/PageController";
import useGetList from "../utils/useGetList";

const Deals: React.FC = () => {
  const [page, setPage] = useState(0);
  const { data, isLoading } = useGetList(page, true);

  if (data && !isLoading) {
    const { items, hasMore, total } = data;

    const handlePage = (evt: React.MouseEvent) => {
      const value = evt.currentTarget.getAttribute("data-value");
      switch (value) {
        case "-1":
          setPage(page - 1);
          break;
        case "1":
          setPage(page + 1);
          break;
        case "FIRST":
          setPage(0);
          break;
        case "LAST":
          setPage(Math.floor(total / 6));
          break;
        default:
          throw new Error("Pagination mishandled");
      }
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
  } else if (!data && isLoading === false) {
    return (
      <h2 className="center-text">Oops, looks like something went wrong</h2>
    );
  } else {
    return <h2 className="center-text">Loading</h2>;
  }
};

export default Deals;
