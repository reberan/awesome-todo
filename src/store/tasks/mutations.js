import Vue from "vue";
export default {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates);
  },
  deleteTask(state, id) {
    // https://vuejs.org/v2/api/?#Vue-delete
    // Delete a property on an object.
    // If the object is reactive, ensure the deletion triggers view updates.
    // This is primarily used to get around the limitation that Vue cannot detect property deletions,
    // but you should rarely need to use it.
    Vue.delete(state.tasks, id);
  },
  addTask(state, payload) {
    const { id, task } = payload;
    // https://vuejs.org/v2/api/#Vue-set
    // Adds a property to a reactive object, ensuring the new property is also reactive,
    // so triggers view updates.This must be used to add new properties to reactive objects,
    // as Vue cannot detect normal property additions(e.g.this.myObject.newProperty = 'hi').
    Vue.set(state.tasks, id, task);
  },
  clearTasks(state) {
    state.tasks = {};
  },
  setSearch(state, value) {
    state.search = value;
  },
  setSort(state, value) {
    state.sort = value;
  },
  setTasksDownloaded(state, value) {
    state.tasksDownloaded = value;
  }
};
