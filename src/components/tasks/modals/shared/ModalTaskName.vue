<template>
  <div class="row q-mb-sm">
    <q-input
      autofocus
      class="col"
      label="Task name"
      outlined
      ref="name"
      :value="name"
      :rules="[val => !!val || 'Field is required']"
      clearable
      clear-icon="close"
      @input="$emit('update:name', $event)"
    >
    </q-input>
  </div>
</template>

<script>
export default {
  props: ["name"]
};
</script>
<style scoped></style>
