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
    async addCar({ commit }, data) {
      const response = await axios.post(`${API_URL}/car/add`, {
        serial_number: data.serial_number,
        brand: data.brand,
        model: data.model,
        color: data.color,
        year: data.year,
        price: data.price,
        car_for_sale: data.car_for_sale
      });
      console.log(response);
      commit("ADD_CAR", response.data);
    },

    async fetchCars({ commit }) {
      const response = await axios.get(`${API_URL}/car`);
      console.log(response.data);
      commit("FETCH_ALL_CAR", response.data);
    },

    async deleteCar({ commit }, car_id) {
      const response = await axios.patch(`${API_URL}/car/delete/${car_id}`);

      commit("DELETE_CAR", response.data);
      console.log(response.data);
    },
  },
  mutations: {
    FETCH_ALL_CAR(state, carState) {
      state.carState = carState;
    },

    DELETE_CAR(state, car_id) {
      let index = state.carState.findIndex((car) => car.car_id == car_id);
      console.log(index);
      state.carState.splice(index, 0);
    },
  },
};
