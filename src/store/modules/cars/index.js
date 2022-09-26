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

    async deleteCar({ commit }, car_id) {
      const response = await axios.patch(
        `${API_URL}/car/delete/${car_id}`
      );

      commit("DELETE_CAR", response.data);
      console.log(response.data);
    },
  },
  mutations: {
    SET_CARS_LIST(state, carState) {
      state.carState = carState;
    },

    DELETE_CAR(state, car_id) {
      let index = state.carState.findIndex((car) => car.car_id == car_id);
      console.log(index);
      state.carState.splice(index, 0);
    },
  },
};
