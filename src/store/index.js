import { createStore } from "vuex"

export default createStore({
  state: {
    searchParams: {},
  },
  mutations: {
    changeSearchParams(state, data) {
      state.searchParams = data
    },
  }
})
