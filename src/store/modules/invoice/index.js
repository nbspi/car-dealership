import axios from "axios";
import { API_URL } from "../../../config/dev.env";

export default {
  state: {
    invoiceState: [],
  },
  getters: {
    fetchInvoice: (state) => {
      return state.invoiceState;
    },
  },
  actions: {
    async fetchInvoice({ commit }) {
      const response = await axios.get(`${API_URL}/invoice`);
      console.log(response.data);
      commit("FETCH_ALL_INVOICE", response.data);
    },

    async createInvoice({ commit }, data) {
      const response = await axios.post(`${API_URL}/invoice/create`, {
        salesperson_id: data.salesperson_id,
        customer_id: data.customer_id,
        car_id: data.car_id,
      });
      console.log(response);
      commit("ADD_INVOICE", response.data);
    },
  },
  mutations: {
    FETCH_ALL_INVOICE(state, invoiceState) {
      state.invoiceState = invoiceState;
    },

    ADD_INVOICE(state, data) {
      state.invoiceState.push(data);
    },
  },
};
