import axios from "axios";
import { API_URL } from "../../../config/dev.env";
import router from "../../../router/index";

export default {
  state: {
    carState: [],
    availableCarsState: [],
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
      return await axios({
        method: "POST",
        url: `${API_URL}/car/add`,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        data: {
          serial_number: data.serial_number,
          brand: data.brand,
          model: data.model,
          color: data.color,
          year: data.year,
          price: data.price,
          brand_new: data.brand_new,
        },
      })
        .then((response) => {
          commit("ADD_CAR", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async fetchCars({ commit }) {
      return await axios({
        method: "GET",
        url: `${API_URL}/car`,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          commit("FETCH_ALL_CAR", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async fetchAvailableCars({ commit }) {
      return await axios({
        method: "GET",
        url: `${API_URL}/car/for-sale`,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          commit("FETCH_AVAILABLE_CARS", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async deleteCar({ commit }, car_id) {
      return await axios({
        method: "PATCH",
        url: `${API_URL}/car/delete/${car_id}`,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          commit("DELETE_CAR", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async editCar({ commit }, car) {
      return await axios({
        method: "PUT",
        url: `${API_URL}/car/edit/${car.car_id}`,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        data: {
          serial_number: car.serial_number,
          brand: car.brand,
          model: car.model,
          color: car.color,
          year: car.year,
          price: car.price,
          brand_new: car.brand_new,
        },
      })
        .then((response) => {
          commit("UPDATE_CAR", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mutations: {
    ADD_CAR(state, data) {
      state.carState.push(data);
      router.push("/cars");
    },

    FETCH_ALL_CAR(state, carState) {
      state.carState = carState;
    },

    FETCH_AVAILABLE_CARS(state, availableCarsState) {
      state.availableCarsState = availableCarsState;
    },

    DELETE_CAR(state, car_id) {
      let index = state.carState.findIndex((car) => car.car_id == car_id);
      state.carState.splice(index, 0);
    },
  },
};
