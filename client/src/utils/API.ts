import axios from "axios";

export default {
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
