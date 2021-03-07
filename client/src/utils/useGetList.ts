import { useState, useEffect } from "react";

import API from "./API";

const pageSize = 6;
const querySize = 7;

const useGetList = (page: number, params: ListQuery) => {
  const [itemsList, setItemsList] = useState<ItemEntry[]>([]);
  console.log({ page, params });

  const paramsWithPage = (() => {
    const NewParams = {
      ...params,
      size: querySize,
      from: page * pageSize,
    };

    return NewParams;
  })();

  useEffect(() => {
    console.log("fire");
    API.getList(paramsWithPage)
      .then((res) => {
        console.log("ListQuery");
        const { items } = res.data;
        setItemsList(items);
      })
      .catch((err) => console.log(err));
    // kind of brutish and inelegant
    // eslint-disable-next-line
  }, Object.values(paramsWithPage));

  return itemsList;
};

export default useGetList;
