import axios from "axios";
const API_URL = "http://172.16.4.182:4000";

export default {
  state: {
    mechanics: [],
  },
  getters: {
    mechanicsList: (state) => state.mechanics,
  },

  actions: {
    async fetchMechanicsList({ commit }) {
      const response = await axios.get(`${API_URL}/mechanics`);
      console.log(response.data);
      commit("SET_MECHANICSLIST", response.data);
    },
  },

  mutations: {
    SET_CARSLIST(state, mechanics) {
      state.mechanics = mechanics;
    },
  },
};
