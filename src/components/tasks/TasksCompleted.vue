<template>
  <div>
    <list-header title="Completed" bgColor="bg-green" />
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
export default {
  props: ["tasksCompleted"],
  components: {
    task: () => import("./Task"),
    "list-header": () => import("../shared/ListHeader")
  }
};
</script>
