<template>
  <q-page class="q-pa-md">
    <p>Todo Page</p>
    <q-list bordered separator>
      <q-item
        clickable
        v-ripple
        v-for="task in todos"
        :key="task.id"
        :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
        @click="task.completed = !task.completed"
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label :class="{ 'text-strikethrough': task.completed }">
            {{ task.name }}
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <div class="row">
            <div class="column justify-center">
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
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        {
          id: 1,
          name: "Go to shop",
          completed: false,
          dueDate: "2020/05/13",
          dueTime: "18:30"
        },
        {
          id: 2,
          name: "Go Shopping",
          completed: false,
          dueDate: "2020/03/10",
          dueTime: "18:30"
        },
        {
          id: 3,
          name: "Fix the car",
          completed: false,
          dueDate: "2020/02/28",
          dueTime: "18:30"
        }
      ]
    };
  }
};
</script>
