import Vue from "vue";
import Vuex from "vuex";
import customers from "./modules/customers/index";
import mechanic from "./modules/mechanic/index";
import auth from "./modules/auth/index";
import dashboard from "./modules/dashboard/index";
import salesperson from "./modules/salesperson/index";
import invoice from "./modules/invoice/index";
import cars from "./modules/cars/index";
import service from "./modules/service/index"

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    customers,
    mechanic,
    auth,
    dashboard,
    salesperson,
    invoice,
    cars,
    service
  },
});

export default store;
