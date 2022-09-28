import axios from "axios";
import { API_URL } from "../../../config/dev.env";

export default {
  state: {
    ticketState: [],
  },
  getters: {
    fetchTicket: (state) => {
      return state.ticketState;
    },
  },
  actions: {
    async fetchTicket({ commit }) {
      const response = await axios.get(`${API_URL}/ticket`);
      console.log(response);
      commit("FETCH_ALL_TICKET", response.data);
    },
  },
  mutations: {
    FETCH_ALL_TICKET(state, ticketState) {
      state.ticketState = ticketState;
    },
  },
};
