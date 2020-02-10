<template>
  <q-page class="q-pa-md">
    <p>Todo Page</p>
    <q-list bordered separator v-if="shouldDisplayList" å>
      <task
        v-for="(task, key) in tasks"
        :key="key"
        :task="task"
        :id="key"
      ></task>
    </q-list>
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
      <add-task @closeAddTask="showAddTask = false"></add-task>
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
    ...mapGetters("tasks", ["tasks"]),
    shouldDisplayList() {
      return Object.keys(this.tasks).length > 0;
    }
  },
  components: {
    task: () => import("../components/tasks/Task"),
    "add-task": () => import("../components/tasks/modals/AddTask")
  }
};
</script>
