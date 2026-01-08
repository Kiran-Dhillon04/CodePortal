import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      count: 0,
      message: "Vuex Practice",
    };
  },

  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },

  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    setMessage(state, payload) {
      state.message = payload;
    },
  },

  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit("increment");
      }, 1000);
    },
  },
});
