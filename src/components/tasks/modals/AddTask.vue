<template>
  <q-card>
    <form @submit.prevent="submitForm">
      <modal-header>Add Task</modal-header>
      <q-card-section class="q-pt-none">
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
      <modal-task-save-button />
    </form>
  </q-card>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      taskToSubmit: {
        name: "",
        dueDate: "",
        dueTime: "",
        completed: false
      }
    };
  },
  methods: {
    ...mapActions("tasks", ["addTask"]),
    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate();
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask();
      }
    },
    submitTask() {
      this.addTask(this.taskToSubmit);
      this.$emit("closeAddTask");
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
  }
};
</script>
