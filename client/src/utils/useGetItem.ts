import { useState, useEffect } from "react";

import API from "./API";

const useGetItem = (_id: string) => {
  const [item, setItem] = useState<ItemEntry[]>([]);

  useEffect(() => {
    API.getItem(_id)
      .then((res) => {
        const { items } = res.data;
        setItem(items);
      })
      .catch((err) => console.log(err));
  }, [_id]);

  return item;
};

export default useGetItem;
