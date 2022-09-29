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
      return await axios({
        method: "GET",
        url: `${API_URL}/service`,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          commit("FETCH_ALL_SERVICE", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },


    async addService({ commit }, data) {
      return await axios({
        method: "POST",
        url: `${API_URL}/service/add`,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        data: {
           service_name: data.service_name,
           hourly_rate: data.hourly_rate,
        },
      })
        .then((response) => {
          commit("ADD_SERVICE", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },


    async deleteService({ commit }, service_id) {
      return await axios({
        method: "PATCH",
        url: `${API_URL}/service/delete/${service_id}`,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          commit("DELETE_SERVICE", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },



    async editService({ commit }, service) {
      return await axios({
        method: "PUT",
        url: `${API_URL}/service/edit/${service.service_id}`,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        data: {
          service_name: service.service_name,
          hourly_rate: service.hourly_rate,
        },
      })
        .then((response) => {
          commit("UPDATE_SERVICE", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
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

    UPDATE_SERVICE(state, data) {
      let index = state.serviceState.map((val, ind) => {
        if (val.id == data.id) {
          return ind;
        }
      });
      let ind = index.filter((service) => service != undefined);
      state.serviceState[ind] = data;
    },
  },
};
