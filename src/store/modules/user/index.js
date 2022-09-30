import axios from "axios";
import { API_URL } from "../../../config/dev.env";

export default {
  state: {
    registerState: [],
  },
  getters: {
    fetchRegister: (state) => {
      return state.registerState;
    },
  },
  actions: {
    async fetchRegister({ commit }) {
      return await axios({
        method: "GET",
        url: `${API_URL}/users`,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          commit("FETCH_ALL_REGISTER", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async addRegister({ commit }, data) {
      return await axios({
        method: "POST",
        url: `${API_URL}/register`,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        data: {
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          password: data.password,
        },
      })
        .then((response) => {
          commit("ADD_REGISTER", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async deleteRegister({ commit }, user_id) {
      return await axios({
        method: "PATCH",
        url: `${API_URL}/user/delete/${user_id}`,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          commit("DELETE_REGISTER", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async editRegister({ commit }, register) {
      return await axios({
        method: "PUT",
        url: `${API_URL}/user/edit/${register.user_id}`,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        data: {
          firstname: register.firstname,
          lastname: register.lastname,
          password: register.password,
        },
      })
        .then((response) => {
          commit("UPDATE_REGISTER", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mutations: {
    FETCH_ALL_REGISTER(state, registerState) {
      state.registerState = registerState;
    },

    DELETE_REGISTER(state, user_id) {
      let index = state.registerState.findIndex(
        (register) => register.user_id == user_id
      );
      
      state.registerState.splice(index, 0);
    },
  },
};
