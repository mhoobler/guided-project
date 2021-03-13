import { useState, useEffect } from "react";

import API from "./API";

const pageSize = 6;

type ReturnType = {
  data?: ItemListResponse;
  isLoading: boolean;
};

const useGetList2 = (
  page: number,
  isOnSale?: boolean,
  q?: string
): ReturnType => {
  const [data, setData] = useState<ItemListResponse | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("firing");
    const params = {
      page: page,
      isOnSale: isOnSale,
      q: q,
      from: page * pageSize,
      size: pageSize,
    };

    API.getList(params)
      .then((res) => {
        const data: ItemListResponse = res.data;
        setData(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [page, isOnSale, q]);

  return { data, isLoading };
};

export default useGetList2;
