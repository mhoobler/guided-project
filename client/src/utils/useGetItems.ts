import { useState, useEffect } from "react";

import API from "./API";

const useGetItems = (params: string) => {
  const [itemsList, setItemsList] = useState<ItemEntry[]>([]);

  useEffect(() => {
    API.getList(JSON.parse(params))
      .then((res) => {
        const { items } = res.data;
        setItemsList(items);
      })
      .catch((err) => console.log(err));
  }, [params]);

  return itemsList;
};

export default useGetItems;
