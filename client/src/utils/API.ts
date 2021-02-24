import axios from "axios";

export default {
  getList: (query: ListQuery) => {
    return axios.get("https://gp-super-store-api.herokuapp.com/item/list", {
      params: query,
    });
  },

  // Remove this if getList is alirght
  getItems: (str: string | undefined = "") => {
    return axios.get("https://gp-super-store-api.herokuapp.com/item/list", {
      params: { q: str, size: 29 },
    });
  },

  getDeals: () => {
    return axios.get("https://gp-super-store-api.herokuapp.com/item/list", {
      params: { isOnSale: true },
    });
  },
};
