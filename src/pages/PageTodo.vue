<template>
  <q-page class="q-pa-md">
    <div class="row q-mb-lg ">
      <search />
      <q-space />
      <sort />
    </div>
    <no-tasks
      class="q-mb-sm"
      v-if="
        !Object.keys(tasksTodo).length &&
          !search &&
          !settings.showTasksInOneList
      "
    />
    <no-search-results
      class="q-mb-sm"
      v-if="
        !Object.keys(tasksTodo).length &&
          !Object.keys(tasksCompleted).length &&
          search
      "
    />

    <tasks-todo v-if="Object.keys(tasksTodo).length" :tasksTodo="tasksTodo" />

    <tasks-completed
      v-if="Object.keys(tasksCompleted).length && !search"
      :tasksCompleted="tasksCompleted"
      :class="{
        'q-mt-sm': Object.keys(tasksTodo).length && !settings.showTasksInOneList
      }"
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
import { mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      showAddTask: false,
      showEditTask: false
    };
  },
  computed: {
    ...mapGetters("tasks", ["tasksTodo", "tasksCompleted", "tasksFiltered"]),
    ...mapGetters("settings", ["settings"]),
    ...mapState("tasks", ["search"])
  },
  components: {
    "add-task": () => import("../components/tasks/modals/AddTask"),
    "tasks-todo": () => import("../components/tasks/TasksTodo"),
    "tasks-completed": () => import("../components/tasks/TasksCompleted"),
    "no-tasks": () => import("../components/tasks/NoTasks"),
    search: () => import("../components/tasks/tools/Search"),
    "no-search-results": () => import("../components/tasks/NoSearchResuls"),
    sort: () => import("../components/tasks/tools/Sort")
  },
  mounted() {
    this.$root.$on("showAddTask", () => (this.showAddTask = true));
  }
};
</script>
