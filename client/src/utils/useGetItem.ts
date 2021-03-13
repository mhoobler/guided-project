import { useState, useEffect } from "react";

import API from "./API";

const useGetItem = (_id: string) => {
  const [item, setItem] = useState<ItemEntry | null>(null);

  useEffect(() => {
    API.getItem(_id)
      .then((res) => {
        const item = res.data;
        console.log(item);
        setItem(item);
      })
      .catch((err) => console.log(err));
  }, [_id]);

  if (item !== null) {
    return item;
  } else {
    return "Sorry we couldn't find that item";
  }
};

export default useGetItem;
