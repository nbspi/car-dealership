import axios from "axios";
import { API_URL } from "../../../config/dev.env";

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
      const response = await axios.post(`${API_URL}/customer/add`, {
        firstname: data.firstname,
        lastname: data.lastname,
        contact: data.contact,
        address: data.address,
      });
      console.log(response);
      commit("ADD_CUSTOMER", response.data);
    },

    async fetchCustomer({ commit }) {
      const response = await axios.get(`${API_URL}/customer`);
      console.log(response);
      commit("FETCH_ALL_CUSTOMER", response.data);
    },

    async deleteCustomer({ commit }, customer_id) {
      const response = await axios.patch(
        `${API_URL}/customer/delete/${customer_id}`
      );
      commit("DELETE_CUSTOMER", response.data);
      console.log(response.data);
    },

    async editCustomer({ commit }, customer) {
      await axios
        .put(`${API_URL}/customer/edit/${customer.customer_id}`, {
          firstname: customer.firstname,
          lastname: customer.lastname,
          contact: customer.contact,
          address: customer.address,
        })
        .then((response) => {
          commit("UPDATE_CUSTOMER", response.data);
          console.log(response.data);
          return response;
        });
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
      state.customerState.splice(index, 0);
    },

    UPDATE_CUSTOMER(state, data) {
      let index = state.customerState.map((val, ind) => {
        if (val.id == data.id) {
          return ind;
        }
      });
      let ind = index.filter((customer) => customer != undefined);
      state.customerState[ind] = data;
    },
  },
};
