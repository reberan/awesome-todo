<template>
  <q-item
    clickable
    v-ripple
    :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
    @click="updateTask({ id: id, updates: { completed: !task.completed } })"
  >
    <q-item-section side top>
      <q-checkbox v-model="task.completed" />
    </q-item-section>

    <q-item-section>
      <q-item-label :class="{ 'text-strikethrough': task.completed }">
        {{ task.name }}
      </q-item-label>
    </q-item-section>

    <q-item-section side v-if="task.dueDate">
      <div class="row">
        <div class="column justify-">
          <q-icon name="event" size="18px" class="q-mr-xs" />
        </div>
        <div class="column">
          <q-item-label class="row justify-end" caption
            >{{ task.dueDate }}
          </q-item-label>
          <q-item-label class="row justify-end" caption>
            <small>
              {{ task.dueTime }}
            </small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>
    <!-- 
        https://vuejs.org/v2/guide/events.html#Event-Modifiers

        Event Modifiers

        It is a very common need to call event.preventDefault() 
        or event.stopPropagation() inside event handlers. 
        Although we can do this easily inside methods, 
        it would be better if the methods can be purely about 
        ata logic rather than having to deal with DOM event details.

        To address this problem, Vue provides event modifiers for v-on. 
        Recall that modifiers are directive postfixes denoted by a dot.
        - .stop: the click event's propagation will be stopped
        - .prevent: the submit event will no longer reload the page
        - .capture
        - .self
        - .once
        - .passive

        Order matters when using modifiers because the relevant code is generated in the same order. 
        Therefore using 
        v-on:click.prevent.self will prevent all clicks while 
        v-on:click.self.prevent will only prevent clicks on the element itself.
    -->
    <q-item-section side>
      <q-btn
        flat
        round
        dense
        color="blue"
        icon="edit"
        @click="showEditTask = true"
      ></q-btn>
    </q-item-section>
    <q-item-section side>
      <q-btn
        flat
        round
        dense
        color="red"
        icon="delete"
        @click.stop="promptToDelete(id)"
      ></q-btn>
    </q-item-section>
    <q-dialog v-model="showEditTask">
      <edit-task @close="showEditTask = false" :task="task"></edit-task>
    </q-dialog>
  </q-item>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: ["task", "id"],
  methods: {
    ...mapActions("tasks", ["updateTask", "deleteTask"]),
    data() {
      return {
        showEditTask: false
      };
    },
    promptToDelete(id) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Really delete ?",
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          this.deleteTask(id);
        });
    }
  },
  components: {
    "edit-task": () => import("./modals/EditTask")
  }
};
</script>
<style scoped></style>
