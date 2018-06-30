import Vue from "vue";
import Vuex from "vuex";
import "es6-promise/auto";
import { CHANGE_MESSAGE } from "./mutation-types.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: "Initial value"
  },
  mutations: {
    [CHANGE_MESSAGE](state, newMessage) {
      state.message = newMessage;
    }
  },
  actions: {}
});
