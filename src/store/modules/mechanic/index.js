// import { axios } from "vue/types/umd";
import axios from "axios";
import { LOCAL_URL } from "../../../config/dev.env";

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
    //* mechanic actions   with axios
    async addMechanic({ commit }, data) {
      const response = await axios.post(`${LOCAL_URL}/mechanic/add`, {
        firstname: data.firstname,
        lastname: data.lastname,
        contact: data.contact,
      });
      console.log(response);
      commit("ADD_MECHANIC", response.data);
    },

    async fetchMechanic({ commit }) {
      const response = await axios.get(`${LOCAL_URL}/mechanic`);
      console.log(response);
      commit("FETCH_ALL_MECHANIC", response.data);
    },

    async deleteMechanic({ commit }, mechanic_id) {
      const response = await axios.patch(
        `${LOCAL_URL}/mechanic/delete/${mechanic_id}`
      );

      commit("DELETE_MECHANIC", response.data);
      console.log(response.data);
    },
  },

  mutations: {
    // mechanic mutation with axios
    ADD_MECHANIC(state, data) {
      state.mechanicState.push(data);
    },

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

    // addSalesperson(state, payload) {
    //   state.salespersonState = state.salespersonState.concat(payload.data);
    // },

    // deleteMechanic(state, mechanic) {
    //   state.mechanic.splice(index, 1);
    // },

    // ADD_SUPPLIER(state, supplier) {
    //   state.suppliersState.push(supplier);
    // },

    // addMechanic(state, payload) {
    //   state.mechanicState = state.mechanicState.concat(payload.data);
    // },
  },
};
