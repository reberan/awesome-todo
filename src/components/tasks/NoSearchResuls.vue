<template>
  <q-banner class="bg-grey-3 mdi-border-bottom">
    <template v-slot:avatar>
      <q-icon name="mood_bad" color="primary" />
    </template>
    {{ $t("noSearchResults") }}
  </q-banner>
</template>
