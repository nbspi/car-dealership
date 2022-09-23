import axios from "axios";
import { API_URL } from "../../../config/dev.env";

export default {
  state: {
    serviceState: [],
  },
  getters: {
    fetchService: (state) => {
      return state.serviceState;
    },
  },
  actions: {
    async fetchService({ commit }) {
      const response = await axios.get(`${API_URL}/service`);
      console.log(response);
      commit("FETCH_ALL_SERVICE", response.data);
    },

    async addService({ commit }, data) {
      const response = await axios.post(`${API_URL}/service/add`, {
        service_name: data.service_name,
        hourly_rate: data.hourly_rate,
      });
      console.log(response);
      commit("ADD_SERVICE", response.data);
    },
  },
  mutations: {
    FETCH_ALL_SERVICE(state, serviceState) {
      state.serviceState = serviceState;
    },
  },
};
