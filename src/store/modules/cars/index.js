import axios from "axios";
import { API_URL } from "../../../config/dev.env";
import router from "../../../router/index"

export default {
  state: {
    carState: [],
    availableCarsState: []
  },
  getters: {
    fetchCars: (state) => {
      return state.carState;
    },

    fetchAvailableCars: (state) => {
      return state.availableCarsState;
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
        brand_new: data.brand_new,
      });
      console.log(response);
      commit("ADD_CAR", response.data);
    },

    async fetchCars({ commit }) {
      const response = await axios.get(`${API_URL}/car`);
      console.log(response.data);
      commit("FETCH_ALL_CAR", response.data);
    },

    async fetchAvailableCars({ commit }) {
      const response = await axios.get(`${API_URL}/car/for-sale`);
      console.log(response.data);
      commit("FETCH_AVAILABLE_CARS", response.data);
    },

    async deleteCar({ commit }, car_id) {
      const response = await axios.patch(`${API_URL}/car/delete/${car_id}`);

      commit("DELETE_CAR", response.data);
      console.log(response.data);
    },

    async editCar({ commit }, car) {
      await axios
        .put(`${API_URL}/car/edit/${car.car_id}`, {
          serial_number: car.serial_number,
          brand: car.brand,
          model: car.model,
          color: car.color,
          year: car.year,
          price: car.price,
          brand_new: car.brand_new,
        })
        .then((response) => {
          commit("UPDATE_CUSTOMER", response.data);
          console.log(response.data);
          return response;
        });
    },

  },
  mutations: {
    ADD_CAR(state, data) {
      state.carState.push(data);
      router.push("/cars")
    },
    
    FETCH_ALL_CAR(state, carState) {
      state.carState = carState;
    },

    FETCH_AVAILABLE_CARS(state, availableCarsState) {
      state.availableCarsState = availableCarsState;
    },

    DELETE_CAR(state, car_id) {
      let index = state.carState.findIndex((car) => car.car_id == car_id);
      console.log(index);
      state.carState.splice(index, 0);
    },
  },
};
