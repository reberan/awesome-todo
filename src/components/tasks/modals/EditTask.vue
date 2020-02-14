<template>
  <q-card>
    <modal-header>{{ $t("editTask") }}</modal-header>
    <form @submit.prevent="submitForm">
      <q-card-section>
        <modal-task-name :name.sync="taskToSubmit.name" ref="modalTaskName" />
        <modal-task-due-date
          :dueDate.sync="taskToSubmit.dueDate"
          @clearDueDate="clearDueDate"
        />
        <modal-task-due-time
          v-if="taskToSubmit.dueDate"
          :dueTime.sync="taskToSubmit.dueTime"
          @clearDueTime="clearDueTime"
        />
      </q-card-section>
      <modal-task-save-button></modal-task-save-button>
    </form>
  </q-card>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: ["id", "task"],
  data() {
    return {
      taskToSubmit: {}
    };
  },
  methods: {
    ...mapActions("tasks", ["updateTask"]),
    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate();
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask();
      }
    },
    submitTask() {
      this.updateTask({ id: this.id, updates: this.taskToSubmit });
      this.$emit("closeEditTask");
    },
    clearDueDate() {
      this.taskToSubmit.dueDate = "";
      this.taskToSubmit.dueTime = "";
    },
    clearDueTime() {
      this.taskToSubmit.dueTime = "";
    }
  },
  components: {
    "modal-header": () => import("./shared/ModalHeader"),
    "modal-task-name": () => import("./shared/ModalTaskName"),
    "modal-task-due-date": () => import("./shared/ModalTaskDueDate"),
    "modal-task-due-time": () => import("./shared/ModalTaskDueTime"),
    "modal-task-save-button": () => import("./shared/ModalButton")
  },
  mounted() {
    this.taskToSubmit = Object.assign(
      {},
      { name: "", dueDate: "", dueTime: "" },
      this.task
    );
  }
};
</script>
