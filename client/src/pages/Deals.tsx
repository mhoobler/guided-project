import React from "react";

import ItemContainer from "../components/ItemContainer";
import useGetList from "../utils/useGetList";

const Deals: React.FC = () => {
  const query: ListQuery = { isOnSale: true };
  const itemsList = useGetList(JSON.stringify(query));

  return (
    <div className="page-wrapper" id="Deals">
      <div className="content">
        <ItemContainer itemsList={itemsList} />
      </div>
    </div>
  );
};

export default Deals;
