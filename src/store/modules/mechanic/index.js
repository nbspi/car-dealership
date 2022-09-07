export default {
  state: {
    mechanicState: [
      {
        first_name: "John",
        last_name: "Doe",
        phone_number: "495945745"

      }
    ],
  },
  getters: {
    fetchMechanic: (state) => {
      return state.mechanicState;
    },
  },

  actions: {},

  mutations: {
    SET_CARSLIST(state, mechanics) {
      state.mechanics = mechanics;
    },
  },
};
