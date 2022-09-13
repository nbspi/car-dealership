import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

// import cars from "./modules/cars";
// import mechanic from "./modules/mechanic";
// import customers from "./modules/customers";
// import users from "./modules/users"
Vue.use(Vuex);

const API_URL = "http://172.16.28.7:5000";
/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    mechanicState: [],
    salespersonState: [],
  },
  getters: {
    fetchMechanic: (state) => {
      return state.mechanicState;
    },
    fetchSalesperson: (state) => {
      return state.salespersonState;
    },
  },

  actions: {
    // addMechanic({ commit }, payload) {
    //   commit("addMechanic", payload);
    // },

    //* action with axios
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

    addSalesperson({ commit }, payload) {
      commit("addSalesperson", payload);
    },
  },

  mutations: {
    SET_CARSLIST(state, mechanics) {
      state.mechanics = mechanics;
    },

    // addMechanic(state, payload) {
    //   state.mechanicState = state.mechanicState.concat(payload.data);
    // },

    addSalesperson(state, payload) {
      state.salespersonState = state.salespersonState.concat(payload.data);
    },

    //* mutation with axios
    ADD_MECHANIC(state, data) {
      state.mechanicState.push(data);
    },

    FETCH_ALL_MECHANIC(state, mechanicState) {
      state.mechanicState = mechanicState;
    },
    // deleteMechanic(state, mechanic) {
    //   state.mechanic.splice(index, 1);
    // },

    // ADD_SUPPLIER(state, supplier) {
    //   state.suppliersState.push(supplier);
    // },
  },
  modules: {
    // cars,
    // customers,
    // mechanic,
    // users
  },
});

export default store;
