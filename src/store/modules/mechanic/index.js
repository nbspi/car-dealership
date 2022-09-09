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
    addMechanic({ commit }, payload) {
      commit("addMechanic", payload)
    }
  },

  mutations: {
    SET_CARSLIST(state, mechanics) {
      state.mechanics = mechanics;
    },

    addMechanic(state, payload) {
      state.mechanicState = state.mechanicState.concat(payload.data);
    },
  },
};
