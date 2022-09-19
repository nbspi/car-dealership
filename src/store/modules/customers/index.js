import axios from "axios";
import { LOCAL_URL } from "../../../config/dev.env";
// const API_URL = "http://172.16.4.182:4000"

export default {
  state: {
    customerState: [],
  },
  getters: {
    fetchCustomer: (state) => {
      return state.customerState;
    },
  },

  actions: {
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
  },

  mutations: {
    FETCH_ALL_CUSTOMER(state, customerState) {
      state.customerState = customerState;
    },

    DELETE_CUSTOMER(state, customer_id) {
      let index = state.customerState.findIndex(
        (customer) => customer.customer_id == customer_id
      );
      console.log(index);
      state.mechanicState.splice(index, 0);
    },
  },
};
