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
    async addTicket({ commit }, data) {
      const response = await axios.post(`${API_URL}/ticket/add`, {
        service_ticket_number: data.service_ticket_number,
        date_received: data.date_received,
        date_returned: data.date_returned,
        customer_name: data.customer_name,
        mechanic_name: data.mechanic_name,
        serial_number: data.serial_number,
        brand: data.brand,
        model: data.model,
        comment: data.comment,
      });
      console.log(response);
      commit("ADD_TICKET", response.data);
    },

    async fetchTicket({ commit }) {
      const response = await axios.get(`${API_URL}/ticket`);
      console.log(response);
      commit("FETCH_ALL_TICKET", response.data);
    },

    async deleteTicket({ commit }, service_ticket_id) {
      const response = await axios.patch(
        `${API_URL}/ticket/delete/${service_ticket_id}`
      );

      commit("DELETE_TICKET", response.data);
      console.log(response.data);
    },
  },
  mutations: {
    FETCH_ALL_TICKET(state, ticketState) {
      state.ticketState = ticketState;
    },

    DELETE_TICKET(state, service_ticket_id) {
      let index = state.ticketState.findIndex((ticket) => ticket.service_ticket_id == service_ticket_id);
      console.log(index);
      state.ticketState.splice(index, 0);
    },
  },
};
