// import { axios } from "vue/types/umd";
import axios from "axios";
const API_URL = "http://172.16.28.7:5000/";


export default {
  state: {
    mechanicState: [],
  },

  getters: {
    fetchMechanic: (state) => {
      return state.mechanicState;
    },
  },

  actions: {
    // addMechanic({ commit }, payload) {
    //   commit("addMechanic", payload)
    // }

   async addMechanic({commit}, data){
      const response = await axios.post(`${API_URL}/mechanic/add`,
      {firstname: data.firstname, lastname: data.lastname, contact: data.contact}
      );
      console.log(response);
      commit("ADD_MECHANIC", response.data)
    }

  },

  mutations: {
    SET_CARSLIST(state, mechanics) {
      state.mechanics = mechanics;
    },

    // addMechanic(state, payload) {
    //   state.mechanicState = state.mechanicState.concat(payload.data);
    // },

    ADD_MECHANIC(state, data){
      state.mechanicState.push(data);
    }

  },
};
