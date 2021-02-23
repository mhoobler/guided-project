import axios from "axios";

export default {
  getItems: (str: string | undefined = "") => {
    return axios.get(
      "https://gp-super-store-api.herokuapp.com/item/list?size=29&q=" + str
    );
  },

  getDeals: () => {
    return axios.get(
      "https://gp-super-store-api.herokuapp.com/item/list?isOnSale=true"
    );
  },
};
