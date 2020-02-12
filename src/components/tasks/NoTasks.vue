<template>
  <q-banner class="bg-grey-3 mdi-border-bottom">
    <template v-slot:avatar>
      <q-icon name="mood" color="primary" />
    </template>
    No tasks to do today!
    <template v-slot:action>
      <q-btn
        flat
        color="primary"
        label="Add Task"
        @click="$root.$emit('showAddTask')"
      />
    </template>
  </q-banner>
</template>
