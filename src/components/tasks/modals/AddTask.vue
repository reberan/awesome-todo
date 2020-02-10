<template>
  <q-card>
    <form @submit.prevent="submitForm">
      <q-card-section class="row">
        <div class="text-h6">Add Task</div>
        <q-space />
        <q-btn flat round dense icon="close" v-close-popup />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="row q-mb-sm">
          <q-input
            autofocus
            class="col"
            label="Task name"
            outlined
            ref="name"
            v-model="taskToSubmit.name"
            :rules="[val => !!val || 'Field is required']"
            clearable
            clear-icon="close"
          >
          </q-input>
        </div>
        <div class="row q-mb-sm">
          <q-input
            outlined
            v-model="taskToSubmit.dueDate"
            label="Due date"
            ref="dueDate"
          >
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop="clearDueDate"
                class="cursor-pointer"
                v-if="taskToSubmit.dueDate"
              />

              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  ref="qDateProxy"
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date
                    v-model="taskToSubmit.dueDate"
                    @input="() => $refs.qDateProxy.hide()"
                  />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div class="row q-mb-sm" v-if="taskToSubmit.dueDate">
          <q-input
            outlined
            clear-icon="close"
            v-model="taskToSubmit.dueTime"
            label="Due time"
            ref="dueTime"
            class="col"
          >
            <template v-slot:append>
              <q-icon
                name="close"
                @click.stop="taskToSubmit.dueTime = ''"
                class="cursor-pointer"
                v-if="taskToSubmit.dueTime"
              />
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time
                    v-model="taskToSubmit.dueTime"
                    format24h
                    clear-icon="close"
                  />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Save" color="primary" type="submit" />
      </q-card-actions>
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
      // eslint-disable-next-line no-console
      console.log("TCL: submitForm -> submitForm", this.$refs);
      this.$refs.name.validate();
      if (!this.$refs.name.hasError) {
        this.submitTask();
      }
    },
    submitTask() {
      // eslint-disable-next-line no-console
      console.log("TCL: submitTask -> submitTask", this.taskToSubmit);
      this.addTask(this.taskToSubmit);
      this.$emit("closeAddTask");
    },
    clearDueDate() {
      this.taskToSubmit.dueDate = "";
      this.taskToSubmit.dueTime = "";
    }
  }
};
</script>
<style scoped></style>
