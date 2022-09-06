import axios from "axios";
const API_URL = "http://172.16.4.182:4000";

export default {
  state: {
    cars: [],
  },
  getters: {
    carsList: (state) => state.cars,
  },

  actions: {
    async fetchCarsList({ commit }) {
      const response = await axios.get(`${API_URL}/cars`);
      console.log(response.data);
      commit("SET_CARSLIST", response.data);
    },
  },

  mutations: {
    SET_CARSLIST(state, cars) {
      state.cars = cars;
    },
  },
};
