import axios from "axios";
import { API_URL } from "../../../config/dev.env";

export default {
  state: {
    carState: [],
  },
  getters: {
    fetchCars: (state) => {
      return state.carState;
    },
  },
  actions: {
    async fetchCars({ commit }) {
      const response = await axios.get(`${API_URL}/car`);
      console.log(response.data);
      commit("SET_CARS_LIST", response.data);
    },
  },
  mutations: {
    SET_CARS_LIST(state, carState) {
      state.carState = carState;
    },
  },
};
