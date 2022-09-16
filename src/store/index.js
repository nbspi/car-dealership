import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { LOCAL_URL } from "../config/dev.env";
import router from "../router/index";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    mechanicState: [],
    salespersonState: [],
    user: {},
    loggedIn: false,
  },
  getters: {
    fetchMechanic: (state) => {
      return state.mechanicState;
    },
    fetchSalesperson: (state) => {
      return state.salespersonState;
    },
    fetchUser: (state) => {
      return state.user;
    }
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

    //salesperson actions
    async addSalesperson({ commit }, data) {
      const response = await axios.post(`${LOCAL_URL}/salesperson/add`, {
        firstname: data.firstname,
        lastname: data.lastname,
        contact: data.contact,
      });
      console.log(response);
      commit("ADD_SALESPERSON", response.data);
    },

    async fetchSalesperson({ commit }) {
      const response = await axios.get(`${LOCAL_URL}/salesperson`);
      console.log(response);
      commit("FETCH_ALL_SALESPERSON", response.data);
    },

    async deleteSalesperson({ commit }, salesperson_id) {
      const response = await axios.patch(
        `${LOCAL_URL}/salesperson/delete/${salesperson_id}`
      );

      commit("DELETE_SALESPERSON", response.data);
      console.log(response.data);
    },

    //auth actions
    async login({ commit }, user) {
      return await axios
        .post(`${LOCAL_URL}/login`, {
          email: user.email,
          password: user.password,
        })
        .then((response) => {
          if (response.data.token) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data));
            router.push("/dashboard");
          }

          commit("loginSuccess", localStorage.getItem("user"));
          return response.data;
        })
        .catch((error) => {
          commit("loginFailure", { user: null });
          console.log("Invalid credentials!", error);
          return error.message;
        });
    },
    logout({ commit }) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      commit("logout");
    },
  },

  mutations: {
    // SET_CARSLIST(state, mechanics) {
    //   state.mechanics = mechanics;
    // },

    //* mechanic mutation with axios
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

    // salesperson mutation with axios
    ADD_SALESPERSON(state, data) {
      state.salespersonState.push(data);
    },

    FETCH_ALL_SALESPERSON(state, salespersonState) {
      state.salespersonState = salespersonState;
    },

    DELETE_SALESPERSON(state, salesperson_id) {
      let index = state.salespersonState.findIndex(
        (salesperson) => salesperson.salesperson_id == salesperson_id
      );
      console.log(index);
      state.salespersonState.splice(index, 0);
    },

    //auth mutations
    loginSuccess(state, user) {
      state.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
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
  modules: {
    // cars,
    // customers,
    // mechanic,
    // users
  },
});

export default store;
