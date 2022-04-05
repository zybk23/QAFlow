import { createStore } from "vuex";
import { BaseApiUrl } from "../Constants";
import axios from "axios";

export default createStore({
  state: {},
  actions: {
    async askTaha(state, params) {
      console.log("paramssss", params);
      try {
        const res = await axios.post(`${BaseApiUrl}/question/ask`, params);
        return res;
      } catch (err) {
        throw err.data;
      }
    },
  },
  mutations: {},
  modules: {},
});
