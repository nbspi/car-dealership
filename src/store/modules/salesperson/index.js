import axios from "axios";
import { LOCAL_URL } from "../../../config/dev.env";

export default {
  state: {
    salespersonState: [],
  },
  getters: {
    fetchSalesperson: (state) => {
      return state.salespersonState;
    },
  },
  actions: {
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
  },
  mutations: {
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
  },
};
