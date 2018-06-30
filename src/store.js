import Vue from "vue";
import Vuex from "vuex";
import "es6-promise/auto";
import { CHANGE_MESSAGE } from "./mutation-types.js";
import { FETCH_NEW_PASSWORD } from "./action-types.js";
import { DDG_HTTP } from "./http-common.js";

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
  actions: {
    [FETCH_NEW_PASSWORD]({ commit }) {
      // will fail due to CORS, which is okay, but the pattern works!
      DDG_HTTP.get(
        "password 32",
        result => commit(CHANGE_MESSAGE, result.Answer),
        error => commit(CHANGE_MESSAGE, error)
      );
    }
  }
});
