<template>
  <div>
    <list-header
      v-if="!settings.showTasksInOneList"
      :title="$t('completed')"
      bgColor="bg-green"
    />
    <q-list bordered separator>
      <task
        v-for="(task, key) in tasksCompleted"
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
  props: ["tasksCompleted"],
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
