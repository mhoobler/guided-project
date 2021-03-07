import React, { useState } from "react";

import ItemContainer from "../components/ItemContainer";
import PageController from "../components/PageController";
import useGetList from "../utils/useGetList";

const pageSize = 6;

const Deals: React.FC = () => {
  const query: ListQuery = { isOnSale: true };
  const [page, setPage] = useState(0);
  const itemsList = useGetList(page, query);
  const itemsSlice = itemsList.slice(0, pageSize);

  const handlePage = (n: number) => {
    setPage(n);
    window.scrollTo(0, 0);
  };

  return (
    <div className="page-wrapper" id="Deals">
      <div className="content">
        <ItemContainer itemsList={itemsSlice} />
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

export default Deals;
