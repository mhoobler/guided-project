import React, { useState, useEffect } from "react";

import ItemContainer from "../components/ItemContainer";
import useGetItems from "../utils/useGetItems";

const Deals: React.FC = () => {
  const query: ListQuery = { isOnSale: true };
  const itemsList = useGetItems(JSON.stringify(query));

  return (
    <div className="page-wrapper" id="Deals">
      <div className="content">
        <ItemContainer itemsList={itemsList} />
      </div>
    </div>
  );
};

export default Deals;
