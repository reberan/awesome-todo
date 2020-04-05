import { uid } from "quasar";
import { Notify } from "quasar";
import { firebaseAuth, firebaseDatabase } from "boot/firebase";
import { showErrorMessage } from "src/functions/function-show-error-message";
import { i18n } from "src/boot/i18n";

export default {
  updateTask({ dispatch }, payload) {
    dispatch("firebaseUpdateTask", payload);
  },
  deleteTask({ dispatch }, id) {
    dispatch("firebaseDeleteTask", id);
  },
  addTask({ dispatch }, task) {
    let id = uid();
    let payload = { id, task };
    dispatch("firebaseAddTask", payload);
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

    // initial check for data
    userTasks.once(
      "value",
      () => {
        commit("setTasksDownloaded", true);
      },
      error => {
        showErrorMessage(error.message);
        this.$router.replace("/auth");
      }
    );

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
  },
  // eslint-disable-next-line no-empty-pattern
  firebaseAddTask({}, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let node = "tasks/" + userId + "/" + payload.id;
    let tasksRef = firebaseDatabase.ref(node);
    tasksRef.set(payload.task, error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        Notify.create({
          message: i18n.t("notification_message_task_created")
        });
      }
    });
  },
  // eslint-disable-next-line no-empty-pattern
  firebaseUpdateTask({}, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let node = "tasks/" + userId + "/" + payload.id;
    let tasksRef = firebaseDatabase.ref(node);
    tasksRef.update(payload.updates, error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        let keys = Object.keys(payload.updates);
        if (!(keys.includes("completed") && keys.length === 1)) {
          Notify.create({
            message: i18n.t("notification_message_task_updated")
          });
        }
      }
    });
  },
  // eslint-disable-next-line no-empty-pattern
  firebaseDeleteTask({}, taskId) {
    let userId = firebaseAuth.currentUser.uid;
    let node = "tasks/" + userId + "/" + taskId;
    let tasksRef = firebaseDatabase.ref(node);
    tasksRef.remove(error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        Notify.create({
          message: i18n.t("notification_message_task_deleted")
        });
      }
    });
  }
};
