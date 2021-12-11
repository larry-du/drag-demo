import { createStore } from "vuex";

export default createStore({
  state: {
    menuList: [
      {
        id: 1,
        name: "red",
        children: [
          {
            id: 321,
            title: "aaaa",
          },
          {
            id: 3231,
            title: "aqwqweda",
          },
          {
            id: 354521,
            title: "wewa",
          },
        ],
      },
      {
        id: 2,
        name: "green",
        children: [
          {
            id: 3821,
            title: "nfnaaa",
          },
          {
            id: 31111231,
            title: "ppopeda",
          },
          {
            id: 54521,
            title: "wllenwa",
          },
        ],
      },
    ],
  },
  mutations: {
    menuList(state, list) {
      state.menuList = list;
    },
  },
  actions: {},
  getters: {
    menuList(state) {
      return state.menuList;
    },
  },
  modules: {},
});
