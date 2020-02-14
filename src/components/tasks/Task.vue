<template>
  <q-item
    clickable
    v-ripple
    v-touch-hold:1000.mouse="showEditTaskModal"
    :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
    @click="updateTask({ id: id, updates: { completed: !task.completed } })"
  >
    <q-item-section side top>
      <q-checkbox v-model="task.completed" class="no-pointer-events" />
    </q-item-section>

    <q-item-section>
      <q-item-label :class="{ 'text-strikethrough': task.completed }"
        >{{ task.name }}
      </q-item-label>
    </q-item-section>

    <q-item-section side v-if="task.dueDate">
      <div class="row">
        <div class="column justify-">
          <q-icon name="event" size="18px" class="q-mr-xs" />
        </div>
        <div class="column">
          <q-item-label class="row justify-end" caption
            >{{ task.dueDate | formattedDate }}
          </q-item-label>
          <q-item-label class="row justify-end" caption>
            <small>
              {{ taskDueTime }}
            </small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>
    <!-- 
        https://vuejs.org/v2/guide/events.html#Event-Modifiers

        Event Modifiers
 v-html="$options.filters.searchHighlight(task.name, search)"
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
        @click.stop="showEditTask = true"
      />
    </q-item-section>
    <q-item-section side>
      <q-btn
        flat
        round
        dense
        color="red"
        icon="delete"
        @click.stop="promptToDelete(id)"
      />
    </q-item-section>
    <q-dialog v-model="showEditTask">
      <edit-task @closeEditTask="showEditTask = false" :task="task" :id="id" />
    </q-dialog>
  </q-item>
</template>
<script>
//import Vue from "vue";
import { mapActions, mapState, mapGetters } from "vuex";
import { date } from "quasar";

export default {
  props: ["task", "id"],
  data() {
    return {
      showEditTask: false
    };
  },
  methods: {
    ...mapActions("tasks", ["updateTask", "deleteTask"]),
    showEditTaskModal() {
      this.showEditTask = true;
    },
    /*
    searchHighlight() {
      // eslint-disable-next-line no-console
      let value = this.task.name;
      let search = this.search;

      if (this.search) {
        let searchRegExp = new RegExp(search, "i");
        let hightlight = value.replace(
          searchRegExp,
          match => '<span class="bg-yellow-6>' + match + "</span>"
        );
        // eslint-disable-next-line no-console
        console.log("TCL: searchHighlight -> hightlight", hightlight);
        return Vue.compile(hightlight).render;
      }
      return value;
    },
    */
    promptToDelete(id) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Really delete ?",
          ok: {
            push: true
          },
          cancel: {
            color: "negative"
          },
          persistent: true
        })
        .onOk(() => {
          this.deleteTask(id);
        });
    }
  },
  components: {
    "edit-task": () => import("./modals/EditTask")
  },
  computed: {
    ...mapState("tasks", ["search"]),
    ...mapGetters("settings", ["settings"]),
    taskDueTime() {
      // eslint-disable-next-line no-console
      console.log(
        "TCL: taskDueTime -> this.settings.show12HourFormat",
        this.settings.show12HourTimeFormat
      );
      if (this.settings.show12HourTimeFormat) {
        const dateTime = this.task.dueDate + " " + this.task.dueTime;
        return date.formatDate(dateTime, "h:mmA");
      } else {
        return this.task.dueTime;
      }
    }
  },
  filters: {
    formattedDate: value => date.formatDate(value, "MMM DD YYYY")
  }
};
</script>
<style scoped></style>
