import { createStore } from "vuex";
import Auth from "./auth";
import Question from "./question";

export default createStore({
  modules: {
    auth: Auth,
    question: Question,
  },
});
