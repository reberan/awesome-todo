export default {
  tasksTodo: state => {
    let tasks = {};
    Object.keys(state.tasks).forEach(key => {
      let task = state.tasks[key];
      if (!task.completed) {
        tasks[key] = task;
      }
    });
    return tasks;
  },
  tasksCompleted: state => {
    let tasks = {};
    Object.keys(state.tasks).forEach(key => {
      let task = state.tasks[key];
      if (task.completed) {
        tasks[key] = task;
      }
    });
    return tasks;
  }
};
