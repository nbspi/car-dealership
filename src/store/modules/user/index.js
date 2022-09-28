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
      const response = await axios.get(`${API_URL}/users`);
      console.log(response);
      commit("FETCH_ALL_REGISTER", response.data);
    },

    async addRegister({ commit }, data) {
      const response = await axios.post(`${API_URL}/register/add`, {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password,
      });
      console.log(response);
      commit("ADD_REGISTER", response.data);
    },

    async deleteRegister({ commit }, user_id) {
      const response = await axios.patch(
        `${API_URL}/users/delete/${user_id}`
      );

      commit("DELETE_REGISTER", response.data);
      console.log(response.data);
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
        console.log(index);
        state.registerState.splice(index, 0);
      },
  },
};
