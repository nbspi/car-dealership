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
      return await axios({
        method: "POST",
        url: `${API_URL}/mechanic/add`,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        data: {
          firstname: data.firstname,
          lastname: data.lastname,
          contact: data.contact,
        },
      })
        .then((response) => {
          commit("ADD_MECHANIC", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async fetchMechanic({ commit }) {
      return await axios({
        method: "GET",
        url: `${API_URL}/mechanic`,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          commit("FETCH_ALL_MECHANIC", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },


    async deleteMechanic({ commit }, mechanic_id) {
      return await axios({
        method: "PATCH",
        url: `${API_URL}/mechanic/delete/${mechanic_id}`,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          commit("DELETE_MECHANIC", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },


    async editMechanic({ commit }, mechanic) {
      return await axios({
        method: "PUT",
        url: `${API_URL}/mechanic/edit/${mechanic.mechanic_id}`,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        data: {
          firstname: mechanic.firstname,
          lastname: mechanic.lastname,
          contact: mechanic.contact,
        },
      })
        .then((response) => {
          commit("UPDATE_MECHANIC", response.data);
        })
        .catch((error) => {
          console.log(error);
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
