<template>
  <q-banner
    inline-actions
    class="text-white text-center list-header"
    :class="bgColor"
  >
    <span class="text-bold text-subtitle1">{{ title }}</span>
  </q-banner>
</template>

<script>
export default {
  props: ["title", "bgColor"]
};
</script>
<style scoped>
.list-header {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>
