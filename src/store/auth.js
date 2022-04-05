// import { createStore } from "vuex";
import { BaseApiUrl } from "../Constants";
import axios from "axios";

export const Auth = {
  state: {},
  actions: {
    async register(state, params) {
      try {
        const res = await axios.post(`${BaseApiUrl}/auth/register`, params);
        return res;
      } catch (err) {
        throw err.data;
      }
    },

    async login(state, params) {
      try {
        const res = await axios.post(`${BaseApiUrl}/auth/login`, params);
        return res;
      } catch (err) {
        throw err.data;
      }
    },
    async askQuestion(state, params) {
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
};
