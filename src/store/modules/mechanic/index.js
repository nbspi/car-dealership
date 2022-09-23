import axios from "axios";
import { API_URL } from "../../../config/dev.env";

export default {
  state: {
    mechanicState: [],
  },
  getters: {
    fetchMechanic: (state) => {
      return state.mechanicState;
    },
  },
  actions: {
    async addMechanic({ commit }, data) {
      const response = await axios.post(`${API_URL}/mechanic/add`, {
        firstname: data.firstname,
        lastname: data.lastname,
        contact: data.contact,
      });
      console.log(response);
      commit("ADD_MECHANIC", response.data);
    },

    async fetchMechanic({ commit }) {
      const response = await axios.get(`${API_URL}/mechanic`);
      console.log(response);
      commit("FETCH_ALL_MECHANIC", response.data);
    },

    async deleteMechanic({ commit }, mechanic_id) {
      const response = await axios.patch(
        `${API_URL}/mechanic/delete/${mechanic_id}`
      );

      commit("DELETE_MECHANIC", response.data);
      console.log(response.data);
    },

    async editMechanic({ commit }, mechanic) {
      await axios
        .put(`${API_URL}/mechanic/edit/${mechanic.mechanic_id}`, {
          firstname: mechanic.firstname,
          lastname: mechanic.lastname,
          contact: mechanic.contact,
        })
        .then((response) => {
          commit("UPDATE_MECHANIC", response.data);
          console.log(response.data);
          return response;
        });
    },
  },
  mutations: {
    FETCH_ALL_MECHANIC(state, mechanicState) {
      state.mechanicState = mechanicState;
    },

    DELETE_MECHANIC(state, mechanic_id) {
      let index = state.mechanicState.findIndex(
        (mechanic) => mechanic.mechanic_id == mechanic_id
      );
      console.log(index);
      state.mechanicState.splice(index, 0);
    },

    UPDATE_MECHANIC(state, data) {
      let index = state.mechanicState.map((val, ind) => {
        if (val.id == data.id) {
          return ind;
        }
      });
      let ind = index.filter((mechanic) => mechanic != undefined);
      state.mechanicState[ind] = data;
    },
  },
};
