import axios from "axios";
const API_URL = "http://172.16.4.182:4000"

export default {
  state: {
    customers: [],
  },
  getters: {
    customersList: (state) => state.customers,
  },

  actions: {
    async fetchCustomersList({ commit }) {
      const response = await axios.get(`${API_URL}/customers`);
      console.log(response.data)
      commit("SET_CUSTOMERSLIST", response.data);
    },
  },

  mutations: {
    SET_CUSTOMERSLIST(state, customers) {
      state.customers = customers;
    },
  },
};

