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

    async deleteService({ commit }, service_id) {
      const response = await axios.patch(
        `${API_URL}/service/delete/${service_id}`
      );

      commit("DELETE_SERVICE", response.data);
      console.log(response.data);
    },
  },
  mutations: {
    FETCH_ALL_SERVICE(state, serviceState) {
      state.serviceState = serviceState;
    },

    DELETE_SERVICE(state, service_id) {
        let index = state.serviceState.findIndex(
          (service) => service.service_id == service_id
        );
        console.log(index);
        state.serviceState.splice(index, 0);
      },
  },
};
