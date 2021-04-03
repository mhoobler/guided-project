import axios from "axios";

export default {
  getList: (query: ListQuery) => {
    return axios.get("https://gp-super-store-api.herokuapp.com/item/list", {
      params: query,
    });
  },

  getItem: (_id: string) => {
    return axios.get(`https://gp-super-store-api.herokuapp.com/item/${_id}`);
  },
};
