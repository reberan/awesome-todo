import { uid } from "quasar";
import { firebaseAuth, firebaseDatabase } from "boot/firebase";

export default {
  updateTask({ commit }, payload) {
    commit("updateTask", payload);
  },
  deleteTask({ commit }, id) {
    commit("deleteTask", id);
  },
  addTask({ commit }, task) {
    let id = uid();
    let payload = { id, task };
    commit("addTask", payload);
  },
  setSearch({ commit }, value) {
    commit("setSearch", value);
  },
  setSort({ commit }, value) {
    commit("setSort", value);
  },
  firebaseReadData({ commit }) {
    let userId = firebaseAuth.currentUser.uid;
    let node = "tasks/" + userId;
    let userTasks = firebaseDatabase.ref(node);
    // child added
    userTasks.on("child_added", snapshot => {
      let task = snapshot.val();
      let payload = {
        id: snapshot.key,
        task
      };
      commit("addTask", payload);
    });
    // child changed
    userTasks.on("child_changed", snapshot => {
      let task = snapshot.val();
      let payload = {
        id: snapshot.key,
        updates: task
      };
      commit("updateTask", payload);
    });
    // child removed
    userTasks.on("child_removed", snapshot => {
      commit("deleteTask", snapshot.key);
    });
  }
};
