import Vue from "vue";
import Vuex from "vuex";
import cars from "./modules/cars";
import mechanic from "./modules/mechanic";
import customers from "./modules/customers";
import users from "./modules/users"
Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
  modules: {
    cars,
    customers,
    mechanic,
    users
  },
});

export default store;
