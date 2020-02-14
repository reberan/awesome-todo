<template>
  <q-select
    filled
    emit-value
    map-options
    v-model="sortBy"
    :options="options"
    :label="$t('sortBy')"
    class="col q-ml-sm"
/></template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      options: [
        { value: "name", label: this.$t("taskName") },
        { value: "dueDate", label: this.$t("taskDueDate") }
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
