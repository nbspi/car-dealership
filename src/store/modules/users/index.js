export default {
  state: {
    users: [
      {
        first_name: "John",
        last_name: "Doe" 
      },
    ],
  },
  getters: {
    fetchUsers: (state) => {
        return state.userState;
    }
  }
};
