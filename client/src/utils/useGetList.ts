import { useState, useEffect } from "react";

import API from "./API";

const useGetList = (params: ListQuery) => {
  const [itemsList, setItemsList] = useState<ItemEntry[]>([]);
  // declare the props as independent variables inorder to handle the rerenders
  const { from, size, sortField, sortDir, isOnSale, q } = params;

  useEffect(() => {
    API.getList(params)
      .then((res) => {
        console.log("ListQuery");
        const { items } = res.data;
        setItemsList(items);
      })
      .catch((err) => console.log(err));
    // kind of brutish and inelegant
    // eslint-disable-next-line
  }, [from, size, sortField, sortDir, isOnSale, q]);

  return itemsList;
};

export default useGetList;
