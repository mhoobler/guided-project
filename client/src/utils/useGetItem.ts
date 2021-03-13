import { useState, useEffect } from "react";

import API from "./API";

const useGetItem = (_id: string) => {
  const [item, setItem] = useState<ItemEntry | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    API.getItem(_id)
      .then((res) => {
        const item = res.data;
        console.log(item);
        setItem(item);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, [_id]);

  return { item, isLoading };
};

export default useGetItem;
