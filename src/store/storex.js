import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import { API_URL, LOCAL_URL } from "../config/dev.env";
import router from "../router/index";


Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    customerState: [],
    carState: [],
    mechanicState: [],
    salespersonState: [],
    invoiceState: [],
    user: {},
    topSellers: [],
    monthlySales: {},
    monthlyRevenue: {},
    monthlyCustomers: {},
    loggedIn: false,
  },
  getters: {
    fetchCars: (state) => {
      return state.carState;
    },
    fetchCustomer: (state) => {
      return state.customerState;
    },
    fetchInvoice: (state) => {
      return state.invoiceState;
    },
    fetchMechanic: (state) => {
      return state.mechanicState;
    },
    fetchSalesperson: (state) => {
      return state.salespersonState;
    },
    fetchUser: (state) => {
      return state.user;
    },
    topSellersList: (state) => {
      return state.topSellers;
    },
    monthlySalesRecord: (state) => {
      return state.monthlySales;
    },
    monthlyRevenueRecord: (state) => {
      return state.monthlyRevenue;
    },
    monthlyCustomersRecord: (state) => {
      return state.monthlyCustomers;
    },
  },

  actions: {
    //car actions
    async fetchCars({ commit }) {
      const response = await axios.get(`${LOCAL_URL}/car`);
      console.log(response.data);
      commit("SET_CARS_LIST", response.data);
    },

    //customer actions with axios
    async addCustomer({ commit }, data) {
      const response = await axios.post(`${LOCAL_URL}/customer/add`, {
        firstname: data.firstname,
        lastname: data.lastname,
        contact: data.contact,
        address: data.address,
      });
      console.log(response);
      commit("ADD_CUSTOMER", response.data);
    },

    async fetchCustomer({ commit }) {
      const response = await axios.get(`${LOCAL_URL}/customer`);
      console.log(response);
      commit("FETCH_ALL_CUSTOMER", response.data);
    },

    async deleteCustomer({ commit }, customer_id) {
      const response = await axios.patch(
        `${LOCAL_URL}/customer/delete/${customer_id}`
      );
      commit("DELETE_CUSTOMER", response.data);
      console.log(response.data);
    },

    // mechanic actions with axios
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

    async editMechanic({ commit }, mechanic) {
      await axios
        .put(`${LOCAL_URL}/mechanic/edit/${mechanic.mechanic_id}`, {
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

    //invoie actions
    async fetchInvoice({ commit }) {
      const response = await axios.get(`${LOCAL_URL}/invoice`);
      console.log(response.data);
      commit("FETCH_ALL_INVOICE", response.data);
    },

    async createInvoice({ commit }, data) {
      const response = await axios.post(`${LOCAL_URL}/invoice/create`, {
        salesperson_id: data.salesperson_id,
        customer_id: data.customer_id,
        car_id: data.car_id,
      });
      console.log(response);
      commit("ADD_INVOICE", response.data);
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

    //dashboard actions
    async fetchTopSellersList({ commit }) {
      const response = await axios.get(`${API_URL}/top-sellers`);
      console.log(response.data);
      commit("SET_TOPSELLERS_LIST", response.data);
    },

    async fetchMonthlySales({ commit }) {
      const response = await axios.get(`${API_URL}/sales-number`);
      console.log(response.data[0].count);
      commit("SET_MONTHLY_SALES_LIST", response.data[0].count);
    },
    async fetchMonthlyRevenue({ commit }) {
      const response = await axios.get(`${API_URL}/monthly-revenue`);
      console.log(response.data);
      commit("SET_MONTHLY_REVENUE_LIST", response.data[0].month_revenue);
    },
    async fetchMonthlyCustomer({ commit }) {
      const response = await axios.get(`${API_URL}/customers-count`);
      console.log(response.data);
      commit("SET_MONTHLY_CUSTOMERS_LIST", response.data[0].count);
    },
  },

  mutations: {
    SET_CARS_LIST(state, carState) {
      state.carState = carState;
    },

    //customer mutation with axios
    FETCH_ALL_CUSTOMER(state, customerState) {
      state.customerState = customerState;
    },

    ADD_INVOICE(state, data) {
      state.invoiceState.push(data);
    },

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

    UPDATE_MECHANIC(state, data) {
      let index = state.mechanicState.map((val, ind) => {
        if (val.id == data.id) {
          return ind;
        }
      });
      let ind = index.filter((mechanic) => mechanic != undefined);
      state.mechanicState[ind] = data;
    },

    //invoice mutation
    FETCH_ALL_INVOICE(state, invoiceState) {
      state.invoiceState = invoiceState;
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

    //dashboard mutations
    SET_TOPSELLERS_LIST(state, topSellers) {
      state.topSellers = topSellers;
    },

    SET_MONTHLY_SALES_LIST(state, monthlySales) {
      state.monthlySales = monthlySales;
    },
    SET_MONTHLY_REVENUE_LIST(state, monthlyRevenue) {
      state.monthlyRevenue = monthlyRevenue;
    },
    SET_MONTHLY_CUSTOMERS_LIST(state, monthlyCustomers) {
      state.monthlyCustomers = monthlyCustomers;
    },


  },

  modules: {},
});

export default store;
