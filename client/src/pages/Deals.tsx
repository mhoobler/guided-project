import React, { useState } from "react";

import ItemContainer from "../components/ItemContainer";
import PageController from "../components/PageController";
import useGetList from "../utils/useGetList";

const pageSize = 6;

const Deals: React.FC = () => {
  const [page, setPage] = useState(0);
  const {data, isLoading} = useGetList(page, true);

  if(data && !isLoading){

    const {items, hasMore, next, total} = data
    const itemsSlice = items.slice(0, pageSize);

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
          isLast={!hasMore}
          isFirst={page < 1}
        />
      </div>
    );

  }else{
  
    return <div>Uh oh</div>
  }
};

export default Deals;
