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
      return await axios({
        method: "GET",
        url: `${API_URL}/invoice`,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          commit("FETCH_ALL_INVOICE", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },


    async createInvoice({ commit }, data) {
      return await axios({
        method: "POST",
        url: `${API_URL}/invoice/create`,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        data: {
          salesperson_id: data.salesperson_id,
          customer_id: data.customer_id,
          car_id: data.car_id,
        },
      })
        .then((response) => {
          commit("ADD_INVOICE", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mutations: {
    FETCH_ALL_INVOICE(state, invoiceState) {
      state.invoiceState = invoiceState;
    },
  },
};
