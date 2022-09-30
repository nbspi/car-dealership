import axios from "axios";
import { API_URL } from "../../../config/dev.env";
import router from "../../../router/index";
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
      return await axios({
        method: "POST",
        url: `${API_URL}/ticket/create`,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        data: {
          date_received: data.date_received,
          date_returned: data.date_returned,
          customer_id: data.customer_id,
          mechanic_id: data.mechanic_id,
          car_id: data.car_id,
          service_id: data.service_id,
          comments: data.comments,
        },
      })
        .then((response) => {
          commit("ADD_TICKET", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async fetchTicket({ commit }) {
      return await axios({
        method: "GET",
        url: `${API_URL}/ticket`,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          commit("FETCH_ALL_TICKET", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },


    async deleteTicket({ commit }, service_ticket_id) {
      return await axios({
        method: "PATCH",
        url: `${API_URL}/ticket/delete/${service_ticket_id}`,
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((response) => {
          commit("DELETE_TICKET", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

  },
  mutations: {
    FETCH_ALL_TICKET(state, ticketState) {
      state.ticketState = ticketState;
    },

    ADD_TICKET(state, data) {
      state.ticketState.push(data);
      router.push("/service-ticket");
    },

    DELETE_TICKET(state, service_ticket_id) {
      let index = state.ticketState.findIndex(
        (ticket) => ticket.service_ticket_id == service_ticket_id
      );
      state.ticketState.splice(index, 0);
    },
  },
};
