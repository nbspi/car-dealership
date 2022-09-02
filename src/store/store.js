import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    customersState: [
      {
        ID: "40",
        first_name: "Mark",
        last_name: "Lee",
        phone_number: "4546766",
        address: "CA",
      },
      {
        ID: "40",
        first_name: "Renjun",
        last_name: "Huang",
        phone_number: "4546766",
        address: "CN",
      },
      {
        ID: "40",
        first_name: "Jeno",
        last_name: "Lee",
        phone_number: "4546766",
        address: "SK",
      },
      {
        ID: "40",
        first_name: "Haechan",
        last_name: "Lee",
        phone_number: "4546766",
        address: "SK",
      },
      {
        ID: "40",
        first_name: "Jaemin",
        last_name: "Na",
        phone_number: "4546766",
        address: "SK",
      },
      {
        ID: "40",
        first_name: "Chenle",
        last_name: "Zhong",
        phone_number: "4546766",
        address: "CN",
      },
      {
        ID: "40",
        first_name: "Jisung",
        last_name: "Park",
        phone_number: "4546766",
        address: "SK",
      },
    ],
    carsState: [
      {
        ID: 1,
        serial_number: "DJDHW34",
        brand: "XXXX",
        model: "FG-4587",
        color: "Black",
        year: "2022",
      },
    ],
    invoiceState: [
      {
        ID: 1,
        invoice_number: "54543",
        date: "August 24, 2020",
        salesperson_ID: "4546766",
        customer_ID: "35345",
        car_ID: "123",
      },
      {
        ID: 2,
        invoice_number: "54543",
        date: "August 24, 2020",
        salesperson_ID: "4546766",
        customer_ID: "35345",
        car_ID: "123",
      },
      {
        ID: 3,
        invoice_number: "54543",
        date: "August 24, 2020",
        salesperson_ID: "4546766",
        customer_ID: "35345",
        car_ID: "123",
      },
    ],
    listMechanics: [
      {
        first_name: "Mark",
        last_name: "Lee",
        phone_number: "090239340"
      },
    ],
  },
  getters: {
    fetchCustomers: (state) => {
      return state.customersState;
    },
    fetchCars: (state) => {
      return state.carsState;
    },
    fetchInvoice: (state) => {
      return state.invoiceState;
    },
    
    getListMechanics: (state) => {
      return state.listMechanics;
    },
  },
  mutations: {
    setListMechanics(state, data) {
      state.listMechanics = data;
      return state.listMechanics;
    }
  },
  actions: {
    async fetchListMechanics({ commit }, data) {
      await commit("setListMechanics", data);
      return data;
    }
  },
  modules: {},
});
