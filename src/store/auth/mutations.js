export default {
  setLoggedIn(state, value) {
    // eslint-disable-next-line no-console
    console.log("TCL: mutation.setLoggedIn -> ", state, value);
    state.loggedIn = value;
  }
};
