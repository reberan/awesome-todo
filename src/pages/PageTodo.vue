<template>
  <q-page class="q-pa-md">
    <p>Todo Page</p>
    <q-list bordered separator>
      <task
        v-for="(task, key) in tasks"
        :key="key"
        :task="task"
        :id="key"
      ></task>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("tasks", ["tasks"])
  },
  components: { task: () => import("../components/tasks/Task") }
};
</script>
