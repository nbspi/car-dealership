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
    // async addCustomer({ commit }, data) {
    //   const response = await axios.post(`${API_URL}/customer/add`, {
    //     firstname: data.firstname,
    //     lastname: data.lastname,
    //     contact: data.contact,
    //     address: data.address,
    //   });
    //   console.log(response);
    //   commit("ADD_CUSTOMER", response.data);
    // },

    async addCustomer({ commit }, data) {
      return await axios({
        method: "POST",
        url: `${API_URL}/customer/add`,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        data: {
        firstname: data.firstname,
        lastname: data.lastname,
        contact: data.contact,
        address: data.address,
        },
      })
        .then((response) => {
          commit("ADD_CUSTOMER", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // async fetchCustomer({ commit }) {
    //   const response = await axios.get(`${API_URL}/customer`);
    //   console.log(response);
    //   commit("FETCH_ALL_CUSTOMER", response.data);
    // },

    async fetchCustomer({ commit }) {
      return await axios({
        method: "GET",
        url: `${API_URL}/customer`,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          commit("FETCH_ALL_CUSTOMER", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },


    // async deleteCustomer({ commit }, customer_id) {
    //   const response = await axios.patch(
    //     `${API_URL}/customer/delete/${customer_id}`
    //   );
    //   commit("DELETE_CUSTOMER", response.data);
    //   console.log(response.data);
    // },




    // async editCustomer({ commit }, customer) {
    //   await axios
    //     .put(`${API_URL}/customer/edit/${customer.customer_id}`, {
    //       firstname: customer.firstname,
    //       lastname: customer.lastname,
    //       contact: customer.contact,
    //       address: customer.address,
    //     })
    //     .then((response) => {
    //       commit("UPDATE_CUSTOMER", response.data);
    //       console.log(response.data);
    //       return response;
    //     });
    // },

    
    async deleteCustomer({ commit }, customer_id) {
      return await axios({
        method: "PATCH",
        url: `${API_URL}/customer/delete/${customer_id}`,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          commit("DELETE_CUSTOMER", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },


    async editCustomer({ commit }, customer) {
      return await axios({
        method: "PUT",
        url: `${API_URL}/customer/edit/${customer.customer_id}`,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        data: {
          firstname: customer.firstname,
          lastname: customer.lastname,
          contact: customer.contact,
          address: customer.address,
        },
      })
        .then((response) => {
          commit("UPDATE_CUSTOMER", response.data);
        })
        .catch((error) => {
          console.log(error);
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
