import { createStore } from "vuex"

export default createStore({
  state: {
    searchParams: {},
  },
  mutations: {
    changeSearchParams(state, data) {
      console.log(data)
      state.searchParams = data
    },
  }
})
