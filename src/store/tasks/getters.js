export default {
  tasksTodo: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered;
    let tasksTodo = {};
    Object.keys(tasksFiltered).forEach(key => {
      let task = tasksFiltered[key];
      if (!task.completed) {
        tasksTodo[key] = task;
      }
    });
    return tasksTodo;
  },
  tasksCompleted: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered;
    let tasksCompleted = {};
    Object.keys(tasksFiltered).forEach(key => {
      let task = tasksFiltered[key];
      if (task.completed) {
        tasksCompleted[key] = task;
      }
    });
    return tasksCompleted;
  },
  tasksFiltered: (state, getters) => {
    let tasksSorted = getters.tasksSorted;
    let tasksFiltered = {};
    Object.keys(tasksSorted).forEach(key => {
      let task = tasksSorted[key];
      if (task.name.toLowerCase().match(state.search.toLowerCase())) {
        tasksFiltered[key] = task;
      }
    });
    return tasksFiltered;
  },
  tasksSorted: state => {
    let tasksSorted = {};
    let keyOrdered = Object.keys(state.tasks);
    keyOrdered.sort((a, b) => {
      let taskAprop = state.tasks[a][state.sort].toLowerCase();
      let taskBprop = state.tasks[b][state.sort].toLowerCase();
      if (taskAprop > taskBprop) {
        return 1;
      } else if (taskAprop < taskBprop) {
        return -1;
      } else {
        return 0;
      }
    });
    keyOrdered.forEach(key => {
      tasksSorted[key] = state.tasks[key];
    });
    return tasksSorted;
  }
};
