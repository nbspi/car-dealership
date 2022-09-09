import Vue from "vue";
import Vuex from "vuex";
// import cars from "./modules/cars";
// import mechanic from "./modules/mechanic";
// import customers from "./modules/customers";
// import users from "./modules/users"
Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
    state: {
    mechanicState: [],
  },
  getters: {
    fetchMechanic: (state) => {
      return state.mechanicState;
    },
  },

  actions: {
    addMechanic({ commit }, payload) {
      commit("addMechanic", payload)
    }
  },

  mutations: {
    SET_CARSLIST(state, mechanics) {
      state.mechanics = mechanics;
    },

    addMechanic(state, payload) {
      state.mechanicState = state.mechanicState.concat(payload.data);
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
