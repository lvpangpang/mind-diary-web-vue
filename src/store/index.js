import { createStore } from "vuex"

export default createStore({
  state: {
    search: { name: 1 },
  },
  mutations: {
    changeSearch(state, data) {
      console.log(data)
      state.search = data
    }
  },
  actions: {},
})
