import { defineStore } from "pinia"

export const Store = defineStore("orderList", {
  state: () => {
    return { searchParams: {} }
  },
  actions: {
    editSearchParams(params) {
      this.searchParams = params
    },
  },
})
