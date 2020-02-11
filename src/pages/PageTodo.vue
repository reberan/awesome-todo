<template>
  <q-page class="q-pa-md">
    <no-tasks class="q-mb-sm" v-if="!Object.keys(tasksTodo).length" />

    <tasks-todo v-if="Object.keys(tasksTodo).length" :tasksTodo="tasksTodo" />

    <tasks-completed
      v-if="Object.keys(tasksCompleted).length"
      :tasksCompleted="tasksCompleted"
      :class="{ 'q-mt-sm': Object.keys(tasksTodo).length }"
    />

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        round
        color="primary"
        text-color="white"
        icon="add"
        size="24px"
        @click="showAddTask = true"
      />
    </div>

    <q-dialog v-model="showAddTask">
      <add-task @closeAddTask="showAddTask = false" />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      showAddTask: false,
      showEditTask: false
    };
  },
  computed: {
    ...mapGetters("tasks", ["tasksTodo", "tasksCompleted"])
  },
  components: {
    "add-task": () => import("../components/tasks/modals/AddTask"),
    "tasks-todo": () => import("../components/tasks/TasksTodo"),
    "tasks-completed": () => import("../components/tasks/TasksCompleted"),
    "no-tasks": () => import("../components/tasks/NoTasks")
  },
  mounted() {
    this.$root.$on("showAddTask", () => (this.showAddTask = true));
  }
};
</script>
