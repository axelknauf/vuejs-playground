import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import "es6-promise/auto";
import { CHANGE_MESSAGE } from "./mutation-types.js";
import { FETCH_NEW_PASSWORD } from "./action-types.js";
import { DUMMY_HTTP } from "./http-common.js";

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
    // start `node /test/dummy-express-server.js` for this to work
    [FETCH_NEW_PASSWORD]({ commit }) {
      DUMMY_HTTP.get()
        .then(response => {
          commit(CHANGE_MESSAGE, response.data);
        })
        .catch(error => {
          commit(CHANGE_MESSAGE, error);
        });
    }
  }
});
