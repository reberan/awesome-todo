<template>
  <div class="row q-mb-sm">
    <q-input
      outlined
      :value="dueDate"
      label="Due date"
      @input="$emit('update:dueDate', $event)"
    >
      <template v-slot:append>
        <q-icon
          name="close"
          @click="$emit('clearDueDate')"
          class="cursor-pointer"
          v-if="dueDate"
        />
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy
            ref="qDateProxy"
            transition-show="scale"
            transition-hide="scale"
          >
            <q-date :value="dueDate" @input="$emit('update:dueDate', $event)" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props: ["dueDate"]
};
</script>
