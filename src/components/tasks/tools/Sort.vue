<template>
  <q-select
    filled
    emit-value
    map-options
    v-model="sortBy"
    :options="options"
    label="Sort by"
    class="col q-ml-sm"
/></template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      options: [
        { value: "name", label: "Name" },
        { value: "dueDate", label: "Due date" }
      ]
    };
  },
  computed: {
    ...mapState("tasks", ["sort"]),
    sortBy: {
      get() {
        return this.sort;
      },
      set(value) {
        this.setSort(value);
      }
    }
  },
  methods: {
    ...mapActions("tasks", ["setSort"])
  }
};
</script>
<style scoped>
.q-select {
  flex: 0 0 150px;
}
</style>
