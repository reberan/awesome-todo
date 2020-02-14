<template>
  <q-banner class="bg-grey-3 mdi-border-bottom">
    <template v-slot:avatar>
      <q-icon name="mood" color="primary" />
    </template>
    {{ $t("noTasksToDoToday") }}
    <template v-slot:action>
      <q-btn
        flat
        color="primary"
        :label="$t('addTask')"
        @click="$root.$emit('showAddTask')"
      />
    </template>
  </q-banner>
</template>
