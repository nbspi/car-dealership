import axios from "axios";
const API_URL = "http://172.16.4.182:4000";

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
      console.log(response.data);
      commit("SET_CUSTOMERSLIST", response.data);
    },
    // async addCustomer({ commit }, { fullname, contact, address, SecretKey }) {
    //   console.log("look", contact);
    //   return await axios({
    //     method: "POST",
    //     url: `${this.$axios.defaults.baseURL}customers/add/`,
    //     headers: {
    //       Authorization: `Bearer ${SecretKey}`,
    //     },

    //     data: {
    //       fullname,
    //       contact,
    //       address,
    //     },
    //   }).then((res) => {
    //     console.log("actionnew", res);

    //     commit("ADD_CUSTOMER", res.data.posted);

    //     return res;
    //   });
    //   // .catch(err => err);
    // },
  },

  mutations: {
    SET_CUSTOMERSLIST(state, customers) {
      state.customers = customers;
    },
    // ADD_CUSTOMER(state, customer) {
    //   state.customers.push(customer);
    // }
    // mutations: {
    //   ADD_USER_DATA: (state, data) => {
    //     state.userData.push(data)
    //   }
    // }
  },
};
