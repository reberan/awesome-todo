import Vue from "vue";
export default {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates);
  },
  deleteTask(state, id) {
    //   https://vuejs.org/v2/api/?#Vue-delete
    //   Delete a property on an object.
    //   If the object is reactive, ensure the deletion triggers view updates.
    //   This is primarily used to get around the limitation that Vue cannot detect property deletions,
    //   but you should rarely need to use it.
    Vue.delete(state.tasks, id);
  }
};
