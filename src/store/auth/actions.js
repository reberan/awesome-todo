import { LocalStorage, Loading } from "quasar";
import { firebaseAuth } from "boot/firebase";
import { showErrorMessage } from "src/functions/function-show-error-message";

export default {
  //eslint-disable-next-line no-empty-pattern
  registerUser({}, payload) {
    const { email, password } = payload;
    firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        //TODO do something with the response ?
        return response;
      })
      .catch(error => {
        showErrorMessage(error.message);
      });
  },
  //eslint-disable-next-line no-empty-pattern
  loginUser({}, payload) {
    Loading.show();
    const { email, password } = payload;
    firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        //TODO do something with the response ?
        return response;
      })
      .catch(error => {
        showErrorMessage(error.message);
      });
  },
  logoutUser({ commit }) {
    firebaseAuth
      .signOut()
      .then(() => {
        commit("setLoggedIn", false);
      })
      .catch(error => {
        showErrorMessage(error.message);
      });
  },
  handleAuthStateChange({ commit }) {
    firebaseAuth.onAuthStateChanged(user => {
      Loading.hide();
      if (user) {
        commit("setLoggedIn", true);
        LocalStorage.set("loggedIn", true);
        this.$router.push("/").catch(error => error);
      } else {
        commit("setLoggedIn", false);
        LocalStorage.set("loggedIn", false);
        this.$router.replace("/auth").catch(error => error);
      }
    });
  }
};
