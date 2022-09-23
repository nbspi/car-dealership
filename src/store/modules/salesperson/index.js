import axios from "axios";
import { API_URL } from "../../../config/dev.env";

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
      const response = await axios.post(`${API_URL}/salesperson/add`, {
        firstname: data.firstname,
        lastname: data.lastname,
        contact: data.contact,
      });
      console.log(response);
      commit("ADD_SALESPERSON", response.data);
    },

    async fetchSalesperson({ commit }) {
      const response = await axios.get(`${API_URL}/salesperson`);
      console.log(response);
      commit("FETCH_ALL_SALESPERSON", response.data);
    },

    async deleteSalesperson({ commit }, salesperson_id) {
      const response = await axios.patch(
        `${API_URL}/salesperson/delete/${salesperson_id}`
      );

      commit("DELETE_SALESPERSON", response.data);
      console.log(response.data);
    },

    async editSalesperson({ commit }, salesperson) {
      await axios
        .put(`${API_URL}/salesperson/edit/${salesperson.salesperson_id}`, {
          firstname: salesperson.firstname,
          lastname: salesperson.lastname,
          contact: salesperson.contact,
        })
        .then((response) => {
          commit("UPDATE_SALESPERSON", response.data);
          console.log(response.data);
          return response;
        });
    },
  },
  mutations: {
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
    
    UPDATE_SALESPERSON(state, data) {
      let index = state.salespersonState.map((val, ind) => {
        if (val.id == data.id) {
          return ind;
        }
      });
      let ind = index.filter((salesperson) => salesperson != undefined);
      state.salespersonState[ind] = data;
    },
  },
};
