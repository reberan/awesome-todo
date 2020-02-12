export default {
  tasksTodo: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered;
    let tasks = {};
    Object.keys(tasksFiltered).forEach(key => {
      let task = tasksFiltered[key];
      if (!task.completed) {
        tasks[key] = task;
      }
    });
    return tasks;
  },
  tasksCompleted: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered;
    let tasks = {};
    Object.keys(tasksFiltered).forEach(key => {
      let task = tasksFiltered[key];
      if (task.completed) {
        tasks[key] = task;
      }
    });
    return tasks;
  },
  tasksFiltered: state => {
    let tasks = {};
    if (state.search) {
      Object.keys(state.tasks).forEach(key => {
        let task = state.tasks[key];
        if (task.name.toLowerCase().match(state.search.toLowerCase())) {
          tasks[key] = task;
        }
      });
      return tasks;
    }
    return state.tasks;
  }
};
