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
            class="col"
            v-model="taskToSubmit.name"
            label="Task name"
            outlined
            :rules="[val => !!val || 'Field is required']"
            ref="name"
          />
        </div>
        <div class="row q-mb-sm">
          <q-input
            outlined
            v-model="taskToSubmit.dueDate"
            label="Due date"
            ref="dueDate"
          >
            <template v-slot:append>
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
        <div class="row q-mb-sm">
          <q-input
            outlined
            v-model="taskToSubmit.dueTime"
            label="Due time"
            ref="dueTime"
          >
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="taskToSubmit.dueTime" format24h />
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
export default {
  data() {
    return {
      taskToSubmit: {
        name: "",
        dueDate: "",
        duteTime: "",
        completed: false
      }
    };
  },
  methods: {
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
    }
  }
};
</script>
<style scoped></style>
