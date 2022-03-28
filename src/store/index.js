import { createStore } from "vuex"
import api from "./api.json"
const store = createStore({
  state: {
    vuelos: api.vuelos,
    horarios: api.horarios
  },
  mutations: {

  },
  actions: {
  
  },
  modules: {

  }
})
export default store