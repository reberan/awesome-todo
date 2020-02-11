<template>
  <div>
    <list-header title="Todo" bgColor="bg-orange" />
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
export default {
  props: ["tasksTodo"],
  components: {
    task: () => import("./Task"),
    "list-header": () => import("../shared/ListHeader")
  }
};
</script>
