<template>
  <div>
    <list-header
      v-if="!settings.showTasksInOneList"
      title="Todo"
      bgColor="bg-orange"
    />
    <q-list bordered separator>
      <task
        v-for="(task, key) in tasksTodo"
        :key="key"
        :task="task"
        :id="key"
      ></task>
    </q-list>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["tasksTodo"],
  components: {
    task: () => import("./Task"),
    "list-header": () => import("../shared/ListHeader")
  },
  computed: {
    ...mapGetters("settings", ["settings"]),
    tasksList() {
      if (this.settings.showTasksInOneList) {
        return this.tasksTodo;
      } else {
        return this.tasksTodo;
      }
    }
  }
};
</script>
