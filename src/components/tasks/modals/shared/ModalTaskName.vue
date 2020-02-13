<template>
  <div class="row q-mb-sm">
    <q-input
      autofocus
      v-select-all
      class="col"
      label="Task name"
      outlined
      ref="name"
      :value="name"
      :rules="[val => !!val || 'Field is required']"
      @input="$emit('update:name', $event)"
    >
      <template v-slot:append>
        <q-icon
          v-if="name"
          @click="$emit('update:name', '')"
          name="close"
          class="cursor-pointer"
        />
      </template>
    </q-input>
  </div>
</template>

<script>
import { selectAll } from "src/directives/directive-select-all";
export default {
  props: ["name"],
  directives: {
    selectAll
  }
};
</script>
<style scoped></style>
